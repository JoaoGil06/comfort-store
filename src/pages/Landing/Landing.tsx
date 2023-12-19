import { FeaturedProducts, Hero } from '../../components';
import { customFetch } from '../../utils/api';
import { ProductDto } from '../../utils/types/DTOs/Product.dto';
import { LandingLoaderResponse } from '../../utils/types/LandingLoaderResponse.type';

const url = '/products?featured=true';

export const loader = async (): Promise<LandingLoaderResponse> => {
	const response = await customFetch(url);
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
