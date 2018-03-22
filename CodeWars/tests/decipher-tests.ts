import solution = require('../src/decipher');
import {assert} from "chai";


describe("Decipher Tests", function() {

    it("should return the correct code", ()=>{
        let result = solution.getCharCodeForFirstLetter('1',['1','2','3','a','b'])
        assert.deepEqual(result, '1123');

    })
});
