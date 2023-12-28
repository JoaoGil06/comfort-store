import { UserItemState } from '../state/user/types/UserState.type';
import { Themes } from './types/Themes.enum';

export const getThemeFromLocalStorage = (): Themes => {
	const theme = (localStorage.getItem('theme') as Themes) || Themes.Winter;
	document.documentElement.setAttribute('data-theme', theme);
	return theme;
};

export const getUserFromLocalStorage = (): UserItemState | null => {
    const userString = localStorage.getItem('user');
    if (userString) {
		const user: UserItemState = JSON.parse(userString);
        return user;
    } else {
        return null;
    }
};
