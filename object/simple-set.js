const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('simpleSet#Object', () => {
  const map = {};

  for (let i = 0; i < 100000; i++) {
    result = map[i];
  }
});

suite.add('simpleSet#Map', () => {
  const map = new Map();

  for (let i = 0; i < 100000; i++) {
    map.set(i, i);
  }
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();