const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('simpleSet#Object->number', () => {
  const map = {};

  for (let i = 0; i < 100000; i++) {
    map[i] = i;
  }
});

suite.add('simpleSet#Map->number', () => {
  const map = new Map();

  for (let i = 0; i < 100000; i++) {
    map.set(i, i);
  }
});

suite.add('simpleSet#Map->number.toString', () => {
  const map = new Map();

  for (let i = 0; i < 100000; i++) {
    // toString to match the type coercion that happens with map[i]
    map.set(i.toString(), i);
  }
});

suite.add('simpleSet#Object->string', () => {
  const map = {};
  let key;

  for (let i = 0; i < 100000; i++) {
    key = 'namespaced-' + i; 
    map[key] = i;
  }
});

suite.add('simpleSet#Map->string', () => {
  const map = new Map();
  let key;

  for (let i = 0; i < 100000; i++) {
    key = 'namespaced-' + i; 
    map.set(key, i);
  }
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();