import { useState } from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { FormRangeProps } from './types/FormRangeProps.type';

const FormRange = ({ label, name, size, price }: FormRangeProps) => {
	const step = 1000;
	const maxPrice = 100000;
	const [selectedPrice, setSelectedPrice] = useState<number>(price || maxPrice);

	return (
		<div className='form-control'>
			<label htmlFor={name} className='label cursor-pointer'>
				<span className='label-text capitalize'>{label}</span>
				<span>{formatPrice(selectedPrice)}</span>
			</label>
			<input
				type='range'
				name={name}
				min={0}
				max={maxPrice}
				value={selectedPrice}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedPrice(parseInt(e.target.value))}
				className={`range range-primary ${size}`}
				step={step}
			/>
			<div className='w-full flex justify-between text-xs px-2 mt-2'>
				<span className='font-bold text-md'>0</span>
				<span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
			</div>
		</div>
	);
};
export default FormRange;
