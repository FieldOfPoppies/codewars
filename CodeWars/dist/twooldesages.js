"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
function twoOldestAges(ages) {
    return (ages.sort((a, b) => {
        return a > b;
    }).slice(ages.length - 2));
}
exports.twoOldestAges = twoOldestAges;
//# sourceMappingURL=twooldesages.js.map