const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('knownProperties#Object', () => {
  const map = {
    children: [],
    count: 0,
  };
  let result;

  for (let i = 0; i < 100000; i++) {
    map.children = [];
    map.count = 500;
  }

  for (let i = 0; i < 100000; i++) {
    result = map.children.length + map.count;
  }
});

suite.add('knownProperties#Map', () => {
  const map = new Map([['children', []], ['count', 500]]);
  let result;

  for (let i = 0; i < 100000; i++) {
    map.set('children', []);
    map.set('count', 500);
  }

  for (let i = 0; i < 100000; i++) {
    result = map.get('children').length + map.get('count');
  }
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();