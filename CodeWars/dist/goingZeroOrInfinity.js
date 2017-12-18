"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class G964 {
    static going(n) {
        var result = this.divideByFaculty(n) * this.addFaculties(n);
        return Number(result.toFixed(6));
    }
    static divideByFaculty(n) {
        return 1 / this.calculateFaculty(n);
    }
    static addFaculties(n) {
        if (n == 1) {
            return 1;
        }
        return this.addFaculties(n - 1) + this.calculateFaculty(n);
    }
    static calculateFaculty(n) {
        if (n == 0) {
            return 1;
        }
        else
            return n * this.calculateFaculty(n - 1);
    }
}
exports.G964 = G964;
//# sourceMappingURL=goingZeroOrInfinity.js.map