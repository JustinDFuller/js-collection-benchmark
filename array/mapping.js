const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const array = [];
let mappedArray = [];

const set = new Set();
const mappedSet = new Set();

const mediumArray = [];
let mediumMappedArray = [];
const mediumSet = new Set();
const mediumMappedSet = new Set();

const smallArray = [];
let smallMappedArray = [];
const smallSet = new Set();
const smallMappedSet = new Set();

const max = 63385;

for (let i = 0; i < max; i++) {
  array.push(i);
  set.add(i);

  if (i < 100) {
    smallArray.push(i);
    smallSet.add(i);
  }

  if (i < (max / 2)) {
    mediumArray.push(i);
    mediumSet.add(i);
  }
}

suite.add('map#Array->big', () => {
  mappedArray = array.map((val, index) => val * 2);
});

suite.add('map#Set->big', () => {
  set.forEach((val) => mappedSet.add(val * 2));
});

suite.add('map#Array->medium', () => {
  mediumMappedArray = mediumArray.map((val, index) => val * 2);
});

suite.add('map#Set->medium', () => {
  mediumSet.forEach((val) => mediumMappedSet.add(val * 2));
});

suite.add('map#Array->small', () => {
  smallMappedArray = smallArray.map((val, index) => val * 2);
});

suite.add('map#Set->small', () => {
  smallSet.forEach((val) => smallMappedSet.add(val * 2));
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();