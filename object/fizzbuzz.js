const assert = require('assert');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite.add('fizzBuzz#Object', () => {
  const map = {}; // maps can have object keys
  const fizzbuzz = { divisible: 15 };
  const fizz = { divisible: 3 };
  const buzz = { divisible: 5 };

  function useObject(obj, key){
    let called = map[obj[key]] || 0;
    called++; // called one more time
    map[obj[key]] = called;
  }

  for (let i = 0; i < 100000; i++) {
    if (i % 15 === 0) {
      useObject(fizzbuzz, 'divisible');
    } else if (i % 3 === 0) {
      useObject(fizz, 'divisible');
    } else if (i % 5 === 0) {
      useObject(buzz, 'divisible');
    }
  }

  assert.equal(6667, map['15']);
  assert.equal(26667, map['3']);
  assert.equal(13333 , map['5']);
});

suite.add('fizzBuzz#Map', () => {
  const map = new Map(); // maps can have object keys
  const fizzbuzz = { divisible: 15 };
  const fizz = { divisible: 3 };
  const buzz = { divisible: 5 };

  function useObject(obj){
      let called = map.get(obj) || 0;
      called++; // called one more time
      map.set(obj, called);
  }

  for (let i = 0; i < 100000; i++) {
    if (i % 15 === 0) {
      useObject(fizzbuzz);
    } else if (i % 3 === 0) {
      useObject(fizz);
    } else if (i % 5 === 0) {
      useObject(buzz);
    }
  }

  assert.equal(6667, map.get(fizzbuzz));
  assert.equal(26667, map.get(fizz));
  assert.equal(13333 , map.get(buzz));
});

suite.add('fizzBuzz#WeakMap', () => {
  const map = new WeakMap(); // maps can have object keys
  const fizzbuzz = { divisible: 15 };
  const fizz = { divisible: 3 };
  const buzz = { divisible: 5 };

  function useObject(obj){
      let called = map.get(obj) || 0;
      called++; // called one more time
      map.set(obj, called);
  }

  for (let i = 0; i < 100000; i++) {
    if (i % 15 === 0) {
      useObject(fizzbuzz);
    } else if (i % 3 === 0) {
      useObject(fizz);
    } else if (i % 5 === 0) {
      useObject(buzz);
    }
  }

  assert.equal(6667, map.get(fizzbuzz));
  assert.equal(26667, map.get(fizz));
  assert.equal(13333 , map.get(buzz));
});

suite.on('complete', require('../print'))
suite.on('error', console.error)

suite.run();