export default function createPaletteOverride(primary, secondary, success, warning, error, info) {
    return {
        palette: {
            primary: { main: primary },
            secondary: { main: secondary },
            success: { main: success },
            warning: { main: warning },
            error: { main: error },
            info: { main: info },
        }
    };
}
//# sourceMappingURL=createPaletteOverride.js.map