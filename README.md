# js-collection-benchmark
Benchmarking various JS collections.

## Node 7.4.0 Results

### Object

When setting and getting known properties, an object is the fastest.
```
knownProperties#Object x 1,262 ops/sec ±0.79% (86 runs sampled)
knownProperties#Map x 130 ops/sec ±0.69% (81 runs sampled)
Fastest is knownProperties#Object
```

When setting and getting objects, object is the fastest.
```
fizzBuzz#Object x 777 ops/sec ±0.34% (91 runs sampled)
fizzBuzz#Map x 266 ops/sec ±0.52% (88 runs sampled)
fizzBuzz#WeakMap x 188 ops/sec ±0.69% (79 runs sampled)
Fastest is fizzBuzz#Object
```

When setting unknown keys, object is the fastest.
```
simpleSet#Object x 463 ops/sec ±1.52% (77 runs sampled)
simpleSet#Map x 57.73 ops/sec ±3.33% (60 runs sampled)
Fastest is simpleSet#Object
```

## Node 9.8.0 Results

### Object 

All conclusions are the same as above.

```
knownProperties#Object x 1,762 ops/sec ±0.74% (93 runs sampled)
knownProperties#Map x 289 ops/sec ±0.52% (88 runs sampled)
Fastest is knownProperties#Object
```

Map performs much closer to Object in this case.
```
fizzBuzz#Object x 924 ops/sec ±0.25% (93 runs sampled)
fizzBuzz#Map x 908 ops/sec ±1.30% (91 runs sampled)
fizzBuzz#WeakMap x 337 ops/sec ±0.30% (89 runs sampled)
Fastest is fizzBuzz#Object
```

Map performs better but still not as well as Object.
```
simpleSet#Object x 363 ops/sec ±1.09% (83 runs sampled)
simpleSet#Map x 103 ops/sec ±2.07% (74 runs sampled)
Fastest is simpleSet#Object
```