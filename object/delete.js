const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const object = {};
const map = new Map();
const clearMap = new Map();

for (let i = 0; i < 100000; i++) {
  object[i] = i;
  map.set(i, i)
  clearMap.set(i, i)
}

suite.add('delete#Object', () => {
  Object.keys(object).forEach(key => {
    delete object[key];
  });
});

suite.add('delete#Map.delete', () => {
  map.forEach((value, key) => {
    map.delete(key);
  });
});

suite.add('delete#Map.clear', () => {
  clearMap.clear();
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();