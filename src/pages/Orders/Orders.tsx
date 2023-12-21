import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { RootState } from "../../store";
import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/api";
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle,
} from "../../components";
import { OrdersLoaderResponse } from "../../utils/types/OrdersLoaderResponse.type";
import { QueryClient } from "@tanstack/react-query";
import { UserItemState } from "../../state/user/types/UserState.type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ordersQuery = (params: any, user: UserItemState) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store: ToolkitStore<RootState>, queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error getting your orders";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData() as OrdersLoaderResponse;

  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }

  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
