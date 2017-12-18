

import solution = require('../src/goingZeroOrInfinity');
import {assert} from "chai";

function testing(n, expected) {
  assert.equal(solution.G964.going(n), expected)
}

function expectFacultyToBe(n : number, result){
    assert.equal(solution.G964.calculateFaculty(n),result);
}

function expectProductToBe(n : string, k: string, result: string){
    assert.equal(solution.G964.multiply(n,k), result);
}

function expectSumToBe(n:string,m:string,result:string){
    assert.equal(solution.G964.add(n,m),result);
}
describe("Fixed Tests going", function() {
    
    xit('should correctly calculate the faculty', () => {
      assert.equal(solution.G964.calculateFaculty(1),1)
      assert.equal(solution.G964.calculateFaculty(2),2)
      assert.equal(solution.G964.calculateFaculty(3),6)
    })

    xit('should correctly calculate the faculty of big numbers', () => {
        expectFacultyToBe(190,9.332622e+157);
    })

    it('should multiply two numbers presented as strings', () => {
        expectProductToBe("2","3","6");
        expectProductToBe("4","3","12");
        expectProductToBe("12","12","144");
    })

    it("should multiply a number represented as array with a factor", () => {
        assert.equal(solution.G964.multiplySingleLine(["1","2"], 2), "24");
        assert.equal(solution.G964.multiplySingleLine(["1","8"], 2), "36");
        assert.equal(solution.G964.multiplySingleLine(["6","8"], 2), "136");
    })

    it('should add numbers', () => {
        expectSumToBe("2","3","5");
        expectSumToBe("12","30","42");
        expectSumToBe("18","18","36");
        expectSumToBe("99","99","198");
    })

    it("should return the arrays last entry as number", () =>{
        assert.equal(solution.G964.getLastEntryOrZero(["1","2"]),2);
        assert.equal(solution.G964.getLastEntryOrZero(["1"]),1);
        assert.equal(solution.G964.getLastEntryOrZero([]),0);
    })
    
    xit("Basic tests", function() {
        testing(5, 1.275);
        testing(6, 1.2125);
        testing(7, 1.173214);        
    });

    xit("should run successfully for big numbers", () => {
        testing(195,1.005154);
    });


    
});
