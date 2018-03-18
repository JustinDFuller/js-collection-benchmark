const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const object = {
  children: [],
  count: 0,
  5: '',
};
const map = new Map([
  ['children', []], 
  ['count', 500], 
  [5, '']
]);

suite.add('knownProperties#Object', () => {
  object.children = [];
  object.count = 500;
  object[5] = 'test';
});

suite.add('knownProperties#Map', () => {
  map.set('children', []);
  map.set('count', 500);
  map.set(5, 'test');
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();