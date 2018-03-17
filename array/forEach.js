const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = [];
const set = new Set();

for (let i = 0; i < 100000; i++) {
  array.push(i);
  set.add(i);  
}

suite.add('forEach#Array', () => {
  array.forEach((val, index) => assert.equal(val, index));
});

suite.add('forEach#Set', () => {
  set.forEach((val, index) => assert.equal(val, index));
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();