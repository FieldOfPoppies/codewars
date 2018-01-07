"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static longestConsec(strarr, k) {
        var result = "";
        var temp = "";
        for (var i = 0; i <= strarr.length - k; i++) {
            for (var j = 0; j < k; j++) {
                temp += strarr[i + j];
            }
            result = temp.length > result.length ? temp : result;
            temp = "";
        }
        return result;
    }
}
exports.G964 = G964;
//# sourceMappingURL=longestConsecutiveStrings.js.map