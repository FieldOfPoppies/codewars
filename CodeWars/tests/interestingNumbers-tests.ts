import solution = require('../src/interestingNumbers');
import {assert} from "chai";

// TODO: TDD development by writing your own tests
function test(n, awesome, expected) {
  assert.strictEqual(solution.Kata.isInteresting(n,awesome), expected)
}
describe("solution", function(){
 it('should work, dangit!', function() {
    test(3, [1337, 256],     0);
    test(1336, [1337, 256],  1);
    test(1337, [1337, 256],  2);
    test(11208, [1337, 256], 0);
    test(11209, [1337, 256], 1);
    test(11211, [1337, 256], 2);
  });
});

describe('helper functions', () => {
    it('should return if a number is interessting', () => {
        assert.equal(solution.Kata.match(10), false, '10 wrongly recognized');

        assert.equal(solution.Kata.match(100), true, '100 not recognized');
        assert.equal(solution.Kata.match(120), false, '120 wrongly matched');
        
        assert.isTrue(solution.Kata.match(1111), '1111 not recognized');
        assert.isFalse(solution.Kata.match(1112), '1112 wrongly recognized');
        
        assert.isTrue(solution.Kata.match(123), '123 not recognized');

        assert.isTrue(solution.Kata.match(321), '321 not recognized');

        assert.isTrue(solution.Kata.match(12344321));
    });

    it('should return if a number has any digit followed by all zeros', () => {
        assert.equal(solution.Kata.endsWithZeros(100), true, '100 not recognized');
        assert.equal(solution.Kata.endsWithZeros(120), false, '120 wrongly matched');
        assert.equal(solution.Kata.endsWithZeros(3000), true, '3000 not recognized');        
    });
    
    it("should return if a number has all digits the same", ()=>{
        assert.isTrue(solution.Kata.areAllDigitsTheSame('1111'.split('')), '1111 not recognized');
        assert.isTrue(solution.Kata.areAllDigitsTheSame('555555555'.split('')), '555555555 not recognized');
        assert.isFalse(solution.Kata.areAllDigitsTheSame('1234'.split('')), '1234 wrongly recognized');
        assert.isFalse(solution.Kata.areAllDigitsTheSame('111112'.split('')), '1111112 wrongly recognized');
        assert.isFalse(solution.Kata.areAllDigitsTheSame('211111'.split('')), '2111111 wrongly recognized');
    });

    it("should return if a number consists of sequentially increasing digigts", ()=>{
        assert.isTrue(solution.Kata.consistsOfSequentiallyIncreasingNumbers('123'.split('')), '123 not recognized');
        assert.isTrue(solution.Kata.consistsOfSequentiallyIncreasingNumbers('67890'.split('')), '67890 not recognized');

        assert.isFalse(solution.Kata.consistsOfSequentiallyIncreasingNumbers('1235'.split('')), '1235 wrongly recognized');
        assert.isFalse(solution.Kata.consistsOfSequentiallyIncreasingNumbers('90123'.split('')), '90123 wrongly recognized');
    });

    it("should determine if a number is the successor of another number", ()=>{
        assert.isTrue(solution.Kata.isSuccessor('2', '1'), '2, 1');
        assert.isTrue(solution.Kata.isSuccessor('3', '2'), '3, 2');
        assert.isTrue(solution.Kata.isSuccessor('0', '9'), '0, 9');
        assert.isFalse(solution.Kata.isSuccessor('2','2'), '2, 2');
    });

    it("should return if a number consists of sequentially increasing digigts", ()=>{
        assert.isTrue(solution.Kata.consistsOfSequentiallyDecreasingNumbers('321'.split('')), '321 not recognized');
        assert.isTrue(solution.Kata.consistsOfSequentiallyDecreasingNumbers('9876543210'.split('')), '9876543210 not recognized');

        assert.isFalse(solution.Kata.consistsOfSequentiallyDecreasingNumbers('9875'.split('')), '9875 wrongly recognized');
        assert.isFalse(solution.Kata.consistsOfSequentiallyDecreasingNumbers('32109'.split('')), '32109 wrongly recognized');
    });

    it("should return if a number is a palindrome", ()=>{
        assert.isTrue(solution.Kata.isPalindrome('123321'.split('')), '123321 not recognized');
        assert.isTrue(solution.Kata.isPalindrome('12321'.split('')), '12321 not recognized');

        assert.isFalse(solution.Kata.isPalindrome('12345321'.split('')));
        assert.isFalse(solution.Kata.isPalindrome('1234421'.split('')));
    });

    it('should recognize if a number matches one of the awesome phrases', () => {
        const awesomePhrases: number[] = [123, 456, 789];
        assert.isTrue(solution.Kata.matchAwesomePhrase(123, awesomePhrases));
        assert.isTrue(solution.Kata.matchAwesomePhrase(456, awesomePhrases));
        assert.isTrue(solution.Kata.matchAwesomePhrase(789, awesomePhrases));

        assert.isFalse(solution.Kata.matchAwesomePhrase(1234, awesomePhrases));

    });

    
});