const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = [];
let mappedArray = [];

const set = new Set();
const mappedSet = new Set();

for (let i = 0; i < 100000; i++) {
  array.push(i);
  set.add(i);  
}

suite.add('map#Array', () => {
  mappedArray = array.map((val, index) => val * 2);
});

suite.add('map#Set', () => {
  set.forEach((val) => mappedSet.add(val * 2));
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();