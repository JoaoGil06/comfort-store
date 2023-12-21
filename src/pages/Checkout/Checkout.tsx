import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CartTotals, CheckoutForm, SectionTitle } from "../../components";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store: ToolkitStore<RootState>) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector(
    (state: RootState) => state.cartState.cartTotal
  );

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
