import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { customFetch } from '../../utils/api';
import { SingleProductResponse } from '../../utils/types/SingleProductLoaderResponse.type';
import { formatPrice } from '../../utils/formatPrice';
import { generateAmountOptions } from '../../utils/generateAmountOptions';

export const loader = async ({ params }: LoaderFunctionArgs): Promise<SingleProductResponse> => {
	const response = await customFetch(`/products/${params.id}`);
	return { product: response.data.data };
};

const SingleProduct = () => {
	const { product } = useLoaderData() as SingleProductResponse;
	const { image, title, price, description, colors, company } = product.attributes;
	const eurosAmount = formatPrice(+price);
	const [productColor, setProductColor] = useState<string>(colors[0]);
	const [amount, setAmount] = useState<number>(1);

	const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setAmount(parseInt(e.target.value));
	};

	return (
		<section>
			<div className='text-md breadcrumbs'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
				</ul>
			</div>
			<div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
				<img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
				<div>
					<h1 className='capitalize text-3xl font-bold'>{title}</h1>
					<h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
					<p className='mt-3 text-xl'>{eurosAmount}</p>
					<p className='mt-6 leading-8'>{description}</p>
					{/* COLORS */}
					<div className='mt-6'>
						<h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
						<div className='mt2'>
							{colors.map((color: string) => {
								return (
									<button
										key={color}
										type='button'
										className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`}
										style={{ backgroundColor: color }}
										onClick={() => setProductColor(color)}
									></button>
								);
							})}
						</div>
					</div>
					{/* AMOUNT */}
					<div className='form-control w-full max-w-xs'>
						<label htmlFor='amount' className='label'>
							<h4 className='text-md font-medium tracking-wider capitalize'>amount</h4>
						</label>
						<select id='amount' className='select select-secondary select-bordered select-md' value={amount} onChange={handleAmount}>
							{generateAmountOptions(20)}
						</select>
					</div>
					{/* CAR BTN */}
					<div className='mt-10'>
						<button className='btn btn-secondary btn-md' onClick={() => console.log('add to cart')}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
