const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = [];
const set = new Set();

for (let i = 0; i < 100000; i++) {
  array.push(i);
  set.add(i);  
}

let toDelete = 99999;

suite.add('deleting#Array.filter', () => {
  array.filter(i => i !== toDelete--);
});

suite.add('deleting#Array.indexOf/splice', () => {
  const index = array.indexOf(toDelete--);
  array.splice(index, 1);
});

suite.add('deleting#Set', () => {
  set.delete(toDelete--);
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();