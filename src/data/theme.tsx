import { mapThemeColors, Theme } from '@nomana-it/liberty-core';

const themeColors = [
    {
        "THM_NAME": "liberty",
        "TCL_KEY": "secondary",
        "TCL_LIGHT": "#ff9800",
        "TCL_DARK": "#ffc107"
    },
    {
        "THM_NAME": "liberty",
        "TCL_KEY": "color",
        "TCL_LIGHT": "#333333",
        "TCL_DARK": "#E1D9D1"
    },
    {
        "THM_NAME": "liberty",
        "TCL_KEY": "primary",
        "TCL_LIGHT": "#1976d2",
        "TCL_DARK": "#607d8b"
    },
    {
        "THM_NAME": "liberty",
        "TCL_KEY": "background",
        "TCL_LIGHT": "linear-gradient(90deg, rgba(194,233,251,1) 0%, RGBA(161, 196, 253, 1) 100%)",
        "TCL_DARK": "linear-gradient(90deg, RGBA(15, 32, 39, 1)  0%, rgba(32,58,67,1) 50%, rgba(44,83,100,1) 100%)"
    }
]

export const theme = (darkMode: boolean): Theme => {
    const mappedColors = mapThemeColors(themeColors, darkMode);
    return {
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: typeof mappedColors.primary === 'string'
                    ? mappedColors.primary
                    : (darkMode ? '#607d8b' : '#1976d2')
            },
            secondary: {
                main: typeof mappedColors.secondary === 'string'
                    ? mappedColors.secondary
                    : (darkMode ? '#ffc107' : '#1976d2')
            },
            text: {
                primary: darkMode
                    ? "rgba(255, 255, 255, 0.87)"
                    : "rgba(0, 0, 0, 0.87)",
                secondary: darkMode
                    ? "rgba(255, 255, 255, 0.6)"
                    : "rgba(0, 0, 0, 0.6)",
                disabled: darkMode
                    ? "rgba(255, 255, 255, 0.38)"
                    : "rgba(0, 0, 0, 0.38)",
            },
            background: {
                default: darkMode ? "#121212" : "#ffffff",
                paper: darkMode ? "#1d1d1d" : "#ffffff",
            },
            divider: darkMode
                ? "rgba(255, 255, 255, 0.12)"
                : "rgba(0, 0, 0, 0.12)",
            action: {
                hover: darkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.05)",
                selected: darkMode
                    ? "rgba(255, 255, 255, 0.16)"
                    : "rgba(0, 0, 0, 0.08)",
                disabled: darkMode
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(0, 0, 0, 0.26)",
            },
            grey: {
                100: darkMode ? "#e0e0e0" : "#f5f5f5",
                200: darkMode ? "#c7c7c7" : "#eeeeee",
                300: darkMode ? "#a4a4a4" : "#e0e0e0",
                400: darkMode ? "#8f8f8f" : "#bdbdbd",
                500: darkMode ? "#757575" : "#9e9e9e",
                600: darkMode ? "#626262" : "#757575",
                700: darkMode ? "#515151" : "#616161",
                800: darkMode ? "#3a3a3a" : "#424242",
            },
        },
        background: {
            default: typeof mappedColors.background === 'string'
                ? mappedColors.background ?? (darkMode
                    ? 'linear-gradient(to left, #2C5364, #203A43, #0F2027)'
                    : 'linear-gradient(to left, #a1c4fd, #c2e9fb)')
                : 'linear-gradient(to left, #2C5364, #203A43, #0F2027)',
            loginPage: darkMode
                ? 'linear-gradient(to right, rgba(44, 83, 100, 0.7), rgba(32, 58, 67, 0.7), rgba(15, 32, 39, 0.7))'
                : 'linear-gradient(to right, rgba(161, 196, 253, 0.7), rgba(194, 233, 251, 0.7))',
        },
        backgroundShades: {
            light: {
                start: "#e0e0e0",
                middle: "#f5f5f5",
            },
            dark: {
                start: "#424242",
                middle: "#303030",
            },
        },
        color: {
            default: typeof mappedColors.color === 'string'
                ? mappedColors.color
                : (darkMode ? '#E1D9D1' : '#333333'),
        },
        spacing: (factor: number) => `${8 * factor}px`,
        shadows: ["none", "0px 1px 3px rgba(0,0,0,0.2)", "0px 3px 6px rgba(0,0,0,0.3)"],
    }
};
