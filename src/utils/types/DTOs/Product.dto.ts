import { CategoryType } from './Category.type';

export type ProductDto = {
	id: number;
	attributes: {
		title: string;
		company: string;
		description: string;
		featured: boolean;
		createdAt: string; // ISO 8601 date format
		updatedAt: string; // ISO 8601 date format
		publishedAt: string; // ISO 8601 date format
		category: CategoryType;
		image: string; // URL format
		price: string;
		shipping: boolean;
		colors: string[]; // Array of color hex codes
	};
};
