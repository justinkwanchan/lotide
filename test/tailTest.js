const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('returns 2 for tail(words).length', () => {
    assert.strictEqual(tail(words).length, 2);
  })

  it('returns [] for ["dog"]', () => {
    assert.deepEqual(tail(["dog"]), []);
  })
  
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  })
});