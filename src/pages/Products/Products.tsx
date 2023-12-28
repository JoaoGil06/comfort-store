import { LoaderFunctionArgs } from 'react-router-dom';
import { Filters, PaginationContainer, ProductsContainer } from '../../components';
import { customFetch } from '../../utils/api';
import { ProductsLoaderResponse } from '../../utils/types/ProductsLoaderResponse.type';
import { QueryClient } from '@tanstack/react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allProductsQuery = (params: any) => {
	const { search, category, company, sort, price, shipping, page } = params;
	return {
		queryKey: ['products', search ?? '', category ?? 'all', company ?? 'all', sort ?? 'a-z', price ?? 10000, shipping ?? false, page ?? 1],
		queryFn: () => customFetch('/products', { params }),
	};
};

export const loader =
	(queryClient: QueryClient) =>
	async ({ request }: LoaderFunctionArgs): Promise<ProductsLoaderResponse> => {
		const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
		const response = await queryClient.ensureQueryData(allProductsQuery(params));
		const products = response.data.data;
		const meta = response.data.meta;

		return { products, meta, params };
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
