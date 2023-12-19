import { LoaderFunctionArgs } from "react-router-dom";
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "../../components";
import { customFetch } from "../../utils/api";
import { ProductsLoaderResponse } from "../../utils/types/ProductsLoaderResponse.type";

const url = "/products";
export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<ProductsLoaderResponse> => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
