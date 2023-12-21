import { Themes } from "../../../utils/types/Themes.enum";
import { UserType } from "../../../utils/types/User.type";

export interface UserItemState extends UserType {
	token: string;
}

export interface UserState {
	user: UserItemState | null;
	theme: Themes;
}

export interface LoginUserReducerPayloadType {
	type: string;
	payload: {
		jwt: string;
		user: UserType;
	};
}

