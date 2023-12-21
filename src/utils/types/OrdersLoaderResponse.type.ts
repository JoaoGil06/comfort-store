import { OrderDto } from "./DTOs/Order.dto";
import { PaginationDto } from "./DTOs/Pagination.dto";

export interface OrdersLoaderResponse {
	orders: OrderDto[];
	meta: {
		pagination: PaginationDto;
	};
}
