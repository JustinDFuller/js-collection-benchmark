# js-collection-benchmark

[![Greenkeeper badge](https://badges.greenkeeper.io/JustinDFuller/js-collection-benchmark.svg)](https://greenkeeper.io/)

Benchmarking various JS collections.

## Node 9.8.0 Results

### Object vs. Map

* Deleting: Map is 8.2x faster.
* Iterating: Map is 2.7x faster.

* Setting random properties: Object is ~8x faster.
* Setting predefined properties: Object is 2.1x faster.

[Deleting all properties of the collection:](./object/delete.js)
```shell
delete#Object x 5,400,836 ops/sec ±0.48% (93 runs sampled)
delete#Object json stringify/parse after loop. x 1,963,588 ops/sec ±0.38% (94 runs sampled)
delete#Map.delete x 44,486,938 ops/sec ±0.86% (90 runs sampled)
delete#Map.clear x 6,326,996 ops/sec ±1.02% (90 runs sampled)
Fastest is delete#Map.delete
```

[Iterating over every property of the collection:](./object/iteration.js)
```shell
iteration#Object x 39,550 ops/sec ±0.30% (91 runs sampled)
iteration#Object.keys x 34,381 ops/sec ±0.43% (95 runs sampled)
iteration#Map x 106,348 ops/sec ±0.61% (93 runs sampled)
iteration#Map.forEach x 89,610 ops/sec ±0.46% (91 runs sampled)
Fastest is iteration#Map
```

[Setting 100k randomish properties on the collection:](./object/simple-set.js)
```shell
simpleSet#Object->number x 647,654,900 ops/sec ±0.84% (91 runs sampled)
simpleSet#Map->number x 92,466,842 ops/sec ±0.49% (94 runs sampled)
simpleSet#Map->number.toString x 21,471,365 ops/sec ±0.81% (90 runs sampled)
simpleSet#Object->string x 656,535,436 ops/sec ±0.47% (90 runs sampled)
simpleSet#Map->string x 73,210,498 ops/sec ±0.57% (90 runs sampled)
Fastest is simpleSet#Object->string
```

[Setting consistent/predefined properties on the collection 100k times:](./object/known-properties.js)
```shell
knownProperties#Object x 41,441,433 ops/sec ±0.30% (92 runs sampled)
knownProperties#Map x 19,772,295 ops/sec ±1.12% (93 runs sampled)
Fastest is knownProperties#Object
```

### Array vs. Set

IMPORTANT NOTE: Because a Set is specifically for when you need unique values in the collection I will assume that in all use cases and conclusions.

* Checking for existence: Set is ~2.7x faster.
* Deleting known value: Set is ~3.8x faster.

* Pushing to the end: Array is ~2.5x faster.

* Mapping: Array is 1.5x to 2.8x faster for under 63385, but 3.1x slower above that number.

* Iteration: Both are about the same.

[Checking if a property near the end of the collection exists:](./array/checking-exists.js)
```shell
checkingExists#Array x 38,962,202 ops/sec ±0.40% (94 runs sampled)
checkingExists#Set x 107,399,729 ops/sec ±0.84% (91 runs sampled)
Fastest is checkingExists#Set
```

[Adding a property to the collection:](./array/simple-push.js)
```shell
simplePush#Array x 1,783,640 ops/sec ±19.08% (63 runs sampled)
simplePush#Set x 721,583 ops/sec ±26.63% (49 runs sampled)
Fastest is simplePush#Array
```

[Removing a property from the collection:](./array/deleting.js)
```shell
deleting#Array.filter x 39,507 ops/sec ±1.72% (88 runs sampled)
deleting#Array.indexOf/splice x 7,421,798 ops/sec ±0.63% (92 runs sampled)
deleting#Set x 28,176,993 ops/sec ±2.48% (82 runs sampled)
Fastest is deleting#Set
```

[Iterating over every property of the collection:](./array/forEach.js)
```shell
forEach#Array x 91,725 ops/sec ±0.47% (93 runs sampled)
forEach#Set x 92,276 ops/sec ±0.52% (92 runs sampled)
Fastest is forEach#Set
```

[Mapping every property of the collection to be i * 2:](./array/mapping.js)
```shell
map#Array->big x 122 ops/sec ±0.40% (77 runs sampled)
map#Set->big x 381 ops/sec ±0.54% (90 runs sampled)
map#Array->medium x 2,362 ops/sec ±0.26% (95 runs sampled)
map#Set->medium x 829 ops/sec ±0.39% (92 runs sampled)
map#Array->small x 694,447 ops/sec ±0.64% (94 runs sampled)
map#Set->small x 449,965 ops/sec ±0.36% (93 runs sampled)
Fastest is map#Array->small
```

## Conclusions

1. Prefer Objects when mostly writing, Prefer Maps when mostly reading, and Prefer Maps when deletes are needed.
2. Prefer Set if you need to delete or check for existence, prefer Array if you will doing mostly pushes.

## Did I miss something?

The point of this is to learn. If I've missed something (perhaps a faster way to do one of these actions) then please submit a pull request or open an issue.

Thanks for reading!
