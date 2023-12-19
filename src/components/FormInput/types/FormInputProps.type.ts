import { HTMLInputTypeAttribute } from 'react';

export interface FormInputProps {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute;
	size: string;
	defaultValue?: string;
}
