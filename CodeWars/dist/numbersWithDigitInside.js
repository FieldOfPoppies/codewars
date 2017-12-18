"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numbersWithDigitInside(x, d) {
    var numbers = findNumbersWithDigitInside(x, d);
    return assembleResultArray(numbers);
}
exports.numbersWithDigitInside = numbersWithDigitInside;
function assembleResultArray(numbers) {
    var result = [0, 0, 0];
    if (numbers.length > 0) {
        result[0] = (numbers.length);
        result[1] = (numbers.reduce((a, b) => { return a + b; }));
        result[2] = (numbers.reduce((a, b) => { return a * b; }));
    }
    return result;
}
function findNumbersWithDigitInside(x, d) {
    var result = [];
    for (var i = 1; i <= x; i++) {
        if (containsDigit(i, d)) {
            result.push(i);
        }
    }
    return result;
}
exports.findNumbersWithDigitInside = findNumbersWithDigitInside;
function containsDigit(i, d) {
    return i.toString().search(d.toString()) >= 0;
}
exports.containsDigit = containsDigit;
//# sourceMappingURL=numbersWithDigitInside.js.map