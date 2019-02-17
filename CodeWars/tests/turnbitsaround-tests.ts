import solution = require('../src/turnbitsaround');
import { assert, expect } from 'chai'
import { } from 'mocha'

describe.only("SolutionTests", function () {
  describe.only('dev tests', function () {

    it('throws an Error if input contains invald characters', function () {
      const invalidCharacters: string = '+'
      expect(() => solution.encrypt(invalidCharacters)).to.throw()
    })

    it('does not throw an error if input contains only valid characters', function () {
      const invalidCharacters: string = '12312fef234ADG34324Dfs'
      expect(() => solution.encrypt(invalidCharacters)).to.not.throw()
    })

    it("EmptyTests", function () {
      assert.equal(solution.encrypt(""), "")
      assert.equal(solution.decrypt(""), "")
    })

    it("NullTests", function () {
      assert.equal(solution.encrypt(null), null)
      assert.equal(solution.decrypt(null), null)
    })
  })

  it("EncryptExampleTests", function () {
    assert.equal(solution.encrypt("A"), "K");
    assert.equal(solution.encrypt("Abc"), "KyU");
    assert.equal(solution.encrypt("B9"), "rw");

    assert.equal(solution.encrypt("This is a test."), "jvLdRPdQXV8Rd5x");
    assert.equal(solution.encrypt("Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution."), "rfR9qRVMT8TUfeyXGXdrLUcT.dUmVd5xUNo1oRdZQ1dtUXs1QVmRL8RMVt9RHqRtU1Ps1LtPQXVdbpZ9Lfp1");
  });
  it("DecryptExampleTests", function () {
    assert.equal(solution.decrypt("K"), "A");
    assert.equal(solution.decrypt("KyU"), "Abc");
    assert.equal(solution.decrypt("rw"), "B9");

    assert.equal(solution.decrypt("jvLdRPdQXV8Rd5x"), "This is a test.");
    assert.equal(solution.decrypt("rfR9qRVMT8TUfeyXGXdrLUcT.dUmVd5xUNo1oRdZQ1dtUXs1QVmRL8RMVt9RHqRtU1Ps1LtPQXVdbpZ9Lfp1"), "Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.");
  });
});