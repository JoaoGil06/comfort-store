import { CategoryType } from "./DTOs/Category.dto";
import { CompanyDto } from "./DTOs/Company.dto";
import { PaginationDto } from "./DTOs/Pagination.dto";
import { ProductDto } from "./DTOs/Product.dto";

export interface ProductsLoaderResponse {
    products: ProductDto[];
    meta: {
        categories: CategoryType[];
        companies: CompanyDto[];
        pagination: PaginationDto;
    }
}