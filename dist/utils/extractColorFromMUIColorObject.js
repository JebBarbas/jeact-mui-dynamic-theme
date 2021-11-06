export default function extractColorFromMUIColorObject(colorObject, mode, lightShade, darkShade) {
    var light = lightShade !== null && lightShade !== void 0 ? lightShade : 600;
    var dark = darkShade !== null && darkShade !== void 0 ? darkShade : 300;
    return {
        main: (mode == 'dark' ? colorObject[dark] : colorObject[light])
    };
}
//# sourceMappingURL=extractColorFromMUIColorObject.js.map