import { deepmerge } from '@mui/utils';
export default function deepmergeNewPalettes(newPalettes) {
    if (newPalettes) {
        var finalNewPalette_1 = {};
        if (Array.isArray(newPalettes)) {
            newPalettes.forEach(function (newPalette) {
                finalNewPalette_1 = deepmerge(finalNewPalette_1, newPalette);
            });
        }
        else {
            finalNewPalette_1 = deepmerge(finalNewPalette_1, newPalettes);
        }
        return finalNewPalette_1;
    }
    return {};
}
//# sourceMappingURL=deepmergeNewPalettes.js.map