import solution = require('../src/decipher');
import {assert} from "chai";


describe("Decipher Tests", function() {

    it('should return the leading numbers of a string', ()=>{
        let expectedResult = '123'
        let numbers = solution.getLeadingNumbers('123abc');
        assert.equal(numbers,expectedResult,'Numbers have not been extracted successfully');
    });


    it('should return the leading numbers of a string', ()=>{
        let expectedResult = '123'
        let numbers = solution.getLeadingNumbers('123');
        assert.equal(numbers,expectedResult,'Numbers have not been extracted successfully');
    });

    it('should return the letters of a string', ()=>{
        let expectedResult = 'abc'
        let numbers = solution.getLetters('123abc');
        assert.equal(numbers,expectedResult,'Letters have not been extracted successfully');
    });

    it('should return the letters of a string', ()=>{
        let expectedResult = ''
        let numbers = solution.getLetters('123');
        assert.equal(numbers,expectedResult,'Letters have not been extracted successfully');
    });

    it('should switch the first and the last letter of a string', ()=>{
        let expectedResult = 'cba';
        let actual = solution.switchFirstAndLastLetter('abc');
        assert.equal(actual,expectedResult);
    })

    it('should switch the first and the last letter of a string', ()=>{
        let expectedResult = 'ba';
        let actual = solution.switchFirstAndLastLetter('ab');
        assert.equal(actual,expectedResult);
    })

    it('should switch the first and the last letter of a string', ()=>{
        let expectedResult = 'a';
        let actual = solution.switchFirstAndLastLetter('a');
        assert.equal(actual,expectedResult);
    })
});
