const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('simpleSet#Object', () => {
  const map = {}; // maps can have object keys
  let result;

  for (let i = 0; i < 100000; i++) {
    map[i] = i;
  }

  for (let i = 0; i < 100000; i++) {
    result = map[i];
  }
});

suite.add('simpleSet#Map', () => {
  const map = new Map(); // maps can have object keys
  let result;

  for (let i = 0; i < 100000; i++) {
    map.set(i, i);
  }

  for (let i = 0; i < 100000; i++) {
    result = map.get(i);
  }
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();