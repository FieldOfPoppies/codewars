import solution = require('../src/turnbitsaround');
import { assert } from 'chai';

describe("SolutionTests", function(){
  it("EncryptExampleTests", function(){
    assert.equal(solution.encrypt("A"), "K");
    assert.equal(solution.encrypt("Abc"), "KyU");
    assert.equal(solution.encrypt("B9"), "rw");
    
    assert.equal(solution.encrypt("This is a test."), "jvLdRPdQXV8Rd5x");
    assert.equal(solution.encrypt("Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution."), "rfR9qRVMT8TUfeyXGXdrLUcT.dUmVd5xUNo1oRdZQ1dtUXs1QVmRL8RMVt9RHqRtU1Ps1LtPQXVdbpZ9Lfp1");
  });
  it("DecryptExampleTests", function(){
    assert.equal(solution.decrypt("K"), "A");
    assert.equal(solution.decrypt("KyU"), "Abc");
    assert.equal(solution.decrypt("rw"), "B9");
    
    assert.equal(solution.decrypt("jvLdRPdQXV8Rd5x"), "This is a test.");
    assert.equal(solution.decrypt("rfR9qRVMT8TUfeyXGXdrLUcT.dUmVd5xUNo1oRdZQ1dtUXs1QVmRL8RMVt9RHqRtU1Ps1LtPQXVdbpZ9Lfp1"), "Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.");
  });
  it("EmptyTests", function(){
    assert.equal(solution.encrypt(""), "");
    assert.equal(solution.decrypt(""), "");
  });
  it("NullTests", function(){
    assert.equal(solution.encrypt(null), null);
    assert.equal(solution.decrypt(null), null);
  });
});