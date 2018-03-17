# js-collection-benchmark
Benchmarking various JS collections.

## Node 9.8.0 Results

### Object vs. Map

* Maps are faster for deleting. 23.5 times faster.
* Maps are faster for iteration. 10 times faster.

* Clearing a map is slower than deleting all keys manually. 7.5 times slower.

* Objects are faster for insertion. 7 times faster.

[Deleting all properties of the collection:](./object/delete.js)
```shell
delete#Object x 1,342 ops/sec ±0.93% (84 runs sampled)
delete#Object->undefined x 1,901,625 ops/sec ±0.53% (95 runs sampled)
delete#Map.delete x 45,024,514 ops/sec ±0.60% (90 runs sampled)
delete#Map.clear x 6,328,931 ops/sec ±1.13% (92 runs sampled)
Fastest is delete#Map.delete
```

[Iterating over every property of the collection:](./object/iteration.js)
```shell
iteration#Object x 80.29 ops/sec ±3.16% (69 runs sampled)
iteration#Object.keys x 84.38 ops/sec ±3.01% (62 runs sampled)
iteration#Map x 864 ops/sec ±0.83% (91 runs sampled)
iteration#Map.forEach x 811 ops/sec ±0.45% (92 runs sampled)
Fastest is iteration#Map
```

[Setting 100k randomish properties on the collection:](./object/simple-set.js)
```shell
simpleSet#Object x 1,347 ops/sec ±0.32% (93 runs sampled)
simpleSet#Map x 101 ops/sec ±1.57% (69 runs sampled)
Fastest is simpleSet#Object
```

[Setting consistent/predefined properties on the collection 100k times:](./object/known-properties.js)
```shell
knownProperties#Object x 1,693 ops/sec ±0.50% (94 runs sampled)
knownProperties#Map x 290 ops/sec ±0.35% (88 runs sampled)
Fastest is knownProperties#Object
```

### Array vs. Set

* Checking existence is faster in a set. 10.1k times faster.
* Deleting is faster in a set. 1.5k times faster.

* Adding a value is faster in an array. 5 times faster.

* Iteration is close to the same in both but Mapping is faster for Sets. 2.5 times faster.

[Checking if a property near the end of the collection exists:](./array/checking-exists.js)
```shell
checkingExists#Array x 10,371 ops/sec ±0.33% (92 runs sampled)
checkingExists#Set x 105,614,974 ops/sec ±0.35% (93 runs sampled)
Fastest is checkingExists#Set
```

[Adding a property to the collection:](./array/simple-push.js)
```shell
simplePush#Array x 640 ops/sec ±0.57% (91 runs sampled)
simplePush#Set x 131 ops/sec ±1.73% (74 runs sampled)
Fastest is simplePush#Array
```

[Removing a property from the collection:](./array/deleting.js)
```shell
deleting#Array.filter x 306 ops/sec ±1.14% (81 runs sampled)
deleting#Array.indexOf/splice x 12,342 ops/sec ±7.17% (39 runs sampled)
deleting#Set x 17,596,124 ops/sec ±1.29% (91 runs sampled)
Fastest is deleting#Set
```

[Iterating over every property of the collection:](./array/forEach.js)
```shell
forEach#Array x 809 ops/sec ±0.45% (94 runs sampled)
forEach#Set x 799 ops/sec ±0.44% (92 runs sampled)
Fastest is forEach#Array
```

[Mapping every property of the collection to be i * 2:](./array/mapping.js)
```shell
map#Array x 76.07 ops/sec ±0.41% (77 runs sampled)
map#Set x 190 ops/sec ±2.16% (79 runs sampled)
Fastest is map#Set
```

## Conclusions

1. Prefer Map over Object unless you are doing almost no reads and all writes.
2. Prefer Set over Array unless you are doing almost all pushing and no modification.

## Did I miss something?

The point of this is to learn. If I've missed something (perhaps a faster way to do one of these actions) then please submit a pull request or open an issue.

Thanks for reading!
