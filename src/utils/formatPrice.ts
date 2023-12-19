export const formatPrice = (price: number): string => {
	const eurosAmount = new Intl.NumberFormat('pt-PT', {
		style: 'currency',
		currency: 'EUR',
	}).format(price / 100);

	return eurosAmount;
};
