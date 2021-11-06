import { deepmerge } from '@mui/utils';
export default function deepmergeOverrides(overrides) {
    if (overrides) {
        var finalOverride_1 = {};
        if (Array.isArray(overrides)) {
            overrides.forEach(function (override) {
                finalOverride_1 = deepmerge(finalOverride_1, override);
            });
        }
        else {
            finalOverride_1 = deepmerge(finalOverride_1, overrides);
        }
        return finalOverride_1;
    }
    return {};
}
//# sourceMappingURL=deepmergeOverrides.js.map