import { Themes } from "./types/Themes.enum";

export const getThemeFromLocalStorage = (): string => {
    return localStorage.getItem("theme") || Themes.Winter;
  };