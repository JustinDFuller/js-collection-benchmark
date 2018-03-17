const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('simplePush#Array', () => {
  const collection = [];

  for (let i = 0; i < 100000; i++) {
    collection.push(i);
  }
});

suite.add('simplePush#Set', () => {
  const collection = new Set();

  for (let i = 0; i < 100000; i++) {
    collection.add(i);
  }
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();