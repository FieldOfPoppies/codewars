import solution = require('../src/saveMark');
import { assert } from 'chai';

describe('Example Tests', () => {
  it('tests', () => {
    assert.equal(solution.saveMark('48.23° N, 89.10° E', '48.84° N, 89.40° E'), '30KM');
    assert.equal(solution.saveMark('52.10° S, 56.25° W', '52.10° N, 56.25° W'), '6160KM');
    assert.equal(solution.saveMark('11.28° S, 78.98° E', '21.28° S, 75.56° E'), '620KM');
  });

  it('should calculated haversine correctly', ()=>{
    //arrange
    const radius : number = 3390;
    const pointOne: [number, number] = [48.23, 89.10];
    const pointTwo: [number, number] = [48.84, 89.40];
    
    //act
    let result = solution.haversine(radius,pointOne[0], pointOne[1], pointTwo[0], pointTwo[1]);

    //assert
    assert.equal(result, 30);
  })

  it('should calculate another haversine correctly', ()=>{
    //arrange
    const radius : number = 6372.8;
    
    //act
    let result = solution.haversine(radius,36.12, -86.67, 33.94, -118.40);

    //assert
    assert.equal(result, 2880);
  })

  it('should round down to multiples of ten', () => {
      assert.equal(solution.roundDown(31),30);
      assert.equal(solution.roundDown(36),30);
      assert.equal(solution.roundDown(131.234),130);
      assert.equal(solution.roundDown(59.9999),50);
  })

  it('should parse a float from a geolocation correctly', () => {
      assert.equal(solution.parseFloatFromGeoLocation('48.23° N'), 48.23);
      assert.equal(solution.parseFloatFromGeoLocation('48.23° E'), 48.23);
      assert.equal(solution.parseFloatFromGeoLocation('48.23° S'), -48.23);
      assert.equal(solution.parseFloatFromGeoLocation('48.23° W'), -48.23);
  })
  
});