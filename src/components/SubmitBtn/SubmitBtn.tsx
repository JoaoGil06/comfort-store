import { useNavigation } from 'react-router-dom';
import { SubmitBtnProps } from './types/SubmitBtnProps.type';

const SubmitBtn = ({ text }: SubmitBtnProps) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<button type='submit' className='btn btn-primary' disabled={isSubmitting}>
			{isSubmitting ? (
				<>
					<span className='loading loading-spinner'></span>
					sending...
				</>
			) : (
				text || 'submit'
			)}
		</button>
	);
};

export default SubmitBtn;
