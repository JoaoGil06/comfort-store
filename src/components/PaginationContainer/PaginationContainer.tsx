import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { ProductsLoaderResponse } from '../../utils/types/ProductsLoaderResponse.type';

const PaginationContainer = () => {
	const { meta } = useLoaderData() as ProductsLoaderResponse;
	const { pageCount, page } = meta.pagination;
	const { search, pathname } = useLocation();
	const navigate = useNavigate();

	const pages = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});

	const handlePageChange = (pageNumber: number): void => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', `${pageNumber}`);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	const handlePreviousPage = (): void => {
		let prevPage = page - 1;
		if (prevPage < 1) prevPage = pageCount;
		handlePageChange(prevPage);
	};

	const handleNextPage = (): void => {
		let nextPage = page + 1;
		if (nextPage > pageCount) nextPage = 1;
		handlePageChange(nextPage);
	};

	if (pageCount < 2) return null;

	return (
		<div className='mt-16 flex justify-end'>
			<div className='join'>
				<button className='btn btn-xs sm:btn-md jooin-item' onClick={handlePreviousPage}>
					Prev
				</button>
				{pages.map((pageNumber) => {
					return (
						<button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}>
							{pageNumber}
						</button>
					);
				})}
				<button className='btn btn-xs sm:btn-md jooin-item' onClick={handleNextPage}>
					Next
				</button>
			</div>
		</div>
	);
};

export default PaginationContainer;
