export default function useDynamicTheme(): {
    appColorScheme: import("./types").ColorScheme;
    theme: import("@mui/material").Theme;
    setDark: () => void;
    setDefault: () => void;
    setLight: () => void;
};
