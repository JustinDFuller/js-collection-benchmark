const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;
const array = [];
const set = new Set();

suite.add('simplePush#Array', () => {
  array.push('test' + Math.random());
});

suite.add('simplePush#Set', () => {
  set.add('test' + Math.random());
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();