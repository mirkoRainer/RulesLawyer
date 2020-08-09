
export type ThemeState = {
    mode: keyof DarkModeOptions;
};

export type DarkModeOptions = {
    dark: "dark",
    light: "light"
}