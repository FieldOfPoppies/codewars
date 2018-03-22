import solution = require('../src/primeGap');
import {assert} from "chai";


describe("Fixed Tests", function() {

    it("should test the example", ()=>{
        let result = solution.G964.gap(2, 3, 50);
        assert.deepEqual(result, [3,5]);

    })

    it("should test the 2nd example", ()=>{
        let result = solution.G964.gap(2, 100, 110);
        assert.deepEqual(result, [101,103]);

    })

    function testing(g, m, n, expected) {
        assert.deepEqual(solution.G964.gap(g, m, n), expected);
    }

    it("Basic tests gap", function() {
        testing(2,100,110, [101, 103]);
        testing(4,100,110, [103, 107]);
        testing(6,100,110, null);
        testing(8,300,400, [359, 367]);
        testing(10,300,400, [337, 347]);
    });
});
