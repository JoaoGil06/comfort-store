import { Themes } from './types/Themes.enum';

export const getThemeFromLocalStorage = (): Themes => {
	return (localStorage.getItem('theme') as Themes) || Themes.Winter;
};
