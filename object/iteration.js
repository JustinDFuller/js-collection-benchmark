const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const object = {};
const map = new Map();

for (let i = 0; i < 1000; i++) {
  object[i] = i;
  map.set(i, i)
}

suite.add('iteration#Object', () => {
  for (let key in object) {

  }
});

suite.add('iteration#Object.keys', () => {
  Object.keys(object).forEach(key => {

  });
});

suite.add('iteration#Map', () => {
  for (let [key, value] of map) {
    
  }
});

suite.add('iteration#Map.forEach', () => {
  map.forEach((value, key) => {
    
  });
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();