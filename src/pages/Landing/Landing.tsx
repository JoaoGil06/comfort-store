import { QueryClient } from "@tanstack/react-query";
import { FeaturedProducts, Hero } from "../../components";
import { customFetch } from "../../utils/api";
import { ProductDto } from "../../utils/types/DTOs/Product.dto";
import { LandingLoaderResponse } from "../../utils/types/LandingLoaderResponse.type";

const url = "/products?featured=true";
const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader =
  (queryClient: QueryClient) => async (): Promise<LandingLoaderResponse> => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    const products: ProductDto[] = response.data.data;

    return { products };
  };

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
