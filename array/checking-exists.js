const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = [];
const set = new Set();

for (let i = 0; i < 10; i++) {
  array.push(i);
  set.add(i);  
}

suite.add('checkingExists#Array', () => {
  array.includes(10 - 1);
});

suite.add('checkingExists#Set', () => {
  set.has(10 - 1);
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();