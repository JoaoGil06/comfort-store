import { Form, useLoaderData, Link } from 'react-router-dom';
import { FormCheckbox, FormInput, FormRange, FormSelect } from '..';
import { ProductsLoaderResponse } from '../../utils/types/ProductsLoaderResponse.type';

const Filters = () => {
	const { meta, params } = useLoaderData() as ProductsLoaderResponse;

	return (
		<Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
			{/* SEARCH */}
			<FormInput type='search' label='search product' name='search' size='input-sm' defaultValue={params?.search} />
			{/* CATEGORIES */}
			<FormSelect label='select category' name='category' list={meta.categories} size='select-sm' defaultValue={params?.category} />
			{/* COMPANIES */}
			<FormSelect label='select company' name='company' list={meta.companies} size='select-sm' defaultValue={params?.company} />
			{/* ORDER */}
			<FormSelect label='sort by' name='order' list={['a-z', 'z-a', 'price high', 'price low']} size='select-sm' defaultValue={params?.order} />
			{/* PRICE */}
			<FormRange name='price' label='select price' size='range-sm' price={params?.price} />
			{/* SHIPPING */}
			<FormCheckbox name='shipping' label='free shipping' size='checkbox-sm' defaultValue={params?.shipping} />
			{/* BUTTONS */}
			<button type='submit' className='btn btn-primary btn-sm'>
				search
			</button>
			<Link to='/products' className='btn btn-accent btn-sm'>
				reset
			</Link>
		</Form>
	);
};

export default Filters;
