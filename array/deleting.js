const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = [];
const set = new Set();

for (let i = 0; i < 100000; i++) {
  array.push(i);
  set.add(i);  
}

suite.add('deleting#Array', () => {
  array.filter(i => i !== 100000 - 1);
});

suite.add('deleting#Set', () => {
  set.delete(100000 - 1);
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();