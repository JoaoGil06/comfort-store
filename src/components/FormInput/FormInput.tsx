import { FormInputProps } from './types/FormInputProps.type';

const FormInput = ({ label, name, type, defaultValue }: FormInputProps) => {
	return (
		<label className='form-control'>
			<div className='label'>
				<span className='label-text'>{label}</span>
			</div>
			<input type={type} name={name} defaultValue={defaultValue} className='input input-bordered' />
		</label>
	);
};

export default FormInput;
