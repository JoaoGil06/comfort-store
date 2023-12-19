import { CategoryType } from "../../../utils/types/DTOs/Category.dto";
import { CompanyDto } from "../../../utils/types/DTOs/Company.dto";
import { PaginationDto } from "../../../utils/types/DTOs/Pagination.dto";
import { ProductDto } from "../../../utils/types/DTOs/Product.dto";

export interface LoaderDataResponse {
  products: ProductDto[];
  meta: {
      categories: CategoryType[];
      companies: CompanyDto[];
      pagination: PaginationDto;
  }
  }
  