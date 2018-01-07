import solution = require('../src/kprime');
import {assert} from "chai";

function testing(actual, expected) {
    assert.deepEqual(actual, expected);
}

const unitUnderTest = solution.G964;

describe("Kprime Tests", function() {
    it("Basic tests countKprimes", function() {        
        testing(solution.G964.countKprimes(2, 0, 100), [4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39,  46, 49, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
        testing(solution.G964.countKprimes(3, 0, 100), [8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76, 78, 92, 98, 99]);
        testing(solution.G964.countKprimes(5, 1000, 1100), [1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
        testing(solution.G964.countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);
    });

    it("should determine all primes in a given range", () => {
        assert.deepEqual(unitUnderTest.getPrimes(0,10),([2,3,5,7]));
        assert.deepEqual(unitUnderTest.getPrimes(10,20),([11,13,17,19]));
        assert.deepEqual(unitUnderTest.getPrimes(0,1100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097]);
    })

    it("should return true if a number is prime", () => {
        assert.isTrue(unitUnderTest.isPrime(2));
        assert.isTrue(unitUnderTest.isPrime(7));
        assert.isTrue(unitUnderTest.isPrime(113));
    })

    it("should return false if a number is not prime", () => {
        assert.isFalse(unitUnderTest.isPrime(4));
        assert.isFalse(unitUnderTest.isPrime(1));
    })

    it("should return the product of two arrays", () => {
        testing(unitUnderTest.multiplyArrays([1,2],[3,4],0,10), [3,4,6,8]);
        testing(unitUnderTest.multiplyArrays([1,2],[3,4],5,7), [6]);
    })
});



