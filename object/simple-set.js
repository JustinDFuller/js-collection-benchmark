const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const object = {};
const map = new Map();

suite.add('simpleSet#Object->number', () => {
  object[500] = 500;
});

suite.add('simpleSet#Map->number', () => {
  map.set(500, 500);
});

suite.add('simpleSet#Map->number.toString', () => {
  map.set((500).toString(), 500);
});

suite.add('simpleSet#Object->string', () => {
  object['astring'] = 500;
});

suite.add('simpleSet#Map->string', () => {
  map.set('astring', 500);
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();