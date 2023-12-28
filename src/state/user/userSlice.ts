import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { LoginUserReducerPayloadType, UserState } from './types/UserState.type';
import { Themes } from '../../utils/types/Themes.enum';
import { getThemeFromLocalStorage, getUserFromLocalStorage } from '../../utils/localStorage';

const initialState: UserState = {
	user: getUserFromLocalStorage(),
    theme: getThemeFromLocalStorage()
};


const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
        loginUser: (state, action: LoginUserReducerPayloadType): void => {
            const user = {...action.payload.user, token: action.payload.jwt};

            state.user = user;

            localStorage.setItem('user', JSON.stringify(user));
            console.log('[Payload]: ', action.payload);
        },
        logoutUser: (state): void => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('Logged out successfully');

        },
        toggleTheme: (state): void => {
            state.theme = state.theme === Themes.Dracula ? Themes.Winter : Themes.Dracula;
            document.documentElement.setAttribute('data-theme', state.theme);
		    localStorage.setItem('theme', state.theme); 
        }
	},
});


export const {loginUser, logoutUser, toggleTheme} = userSlice.actions;

export default userSlice.reducer;
