import { HTMLInputTypeAttribute } from 'react';

export interface FormInputProps {
	label: string;
	name: string;
	type: HTMLInputTypeAttribute;
	defaultValue?: string;
}
