# js-collection-benchmark
Benchmarking various JS collections.

## Node 9.8.0 Results

### Object vs. Map

* Maps are faster for deleting. 33.5k times faster.
* Maps are faster for iteration. 10 times faster.

* Clearing a map is slower than deleting all keys manually. 7.5 times slower.

* Objects are faster for insertion. 7 times faster.

```shell
delete#Object x 1,335 ops/sec ±0.71% (65 runs sampled)
delete#Map.delete x 44,745,622 ops/sec ±0.62% (85 runs sampled)
delete#Map.clear x 5,853,214 ops/sec ±1.57% (85 runs sampled)
Fastest is delete#Map.delete
```

```shell
iteration#Object x 80.29 ops/sec ±3.16% (69 runs sampled)
iteration#Object.keys x 84.38 ops/sec ±3.01% (62 runs sampled)
iteration#Map x 864 ops/sec ±0.83% (91 runs sampled)
iteration#Map.forEach x 811 ops/sec ±0.45% (92 runs sampled)
Fastest is iteration#Map
```

```shell
simpleSet#Object x 1,347 ops/sec ±0.32% (93 runs sampled)
simpleSet#Map x 101 ops/sec ±1.57% (69 runs sampled)
Fastest is simpleSet#Object
```

```shell
knownProperties#Object x 1,693 ops/sec ±0.50% (94 runs sampled)
knownProperties#Map x 290 ops/sec ±0.35% (88 runs sampled)
Fastest is knownProperties#Object
```

### Array vs. Set

* Checking existence is faster in a set. 10.1k times faster.
* Deleting is faster in a set. 214.6k times faster.

* Adding a value is faster in an array. 5x faster.

* Iteration is close to the same in both but Mapping is faster for Sets. 2.5 times faster.

```shell
checkingExists#Array x 10,371 ops/sec ±0.33% (92 runs sampled)
checkingExists#Set x 105,614,974 ops/sec ±0.35% (93 runs sampled)
Fastest is checkingExists#Set
```

```shell
simplePush#Array x 640 ops/sec ±0.57% (91 runs sampled)
simplePush#Set x 131 ops/sec ±1.73% (74 runs sampled)
Fastest is simplePush#Array
```

```shell
deletion#Array x 313 ops/sec ±0.52% (87 runs sampled)
deletion#Set x 67,193,777 ops/sec ±0.59% (91 runs sampled)
Fastest is deletion#Set
```

```shell
forEach#Array x 809 ops/sec ±0.45% (94 runs sampled)
forEach#Set x 799 ops/sec ±0.44% (92 runs sampled)
Fastest is forEach#Array
```

```shell
map#Array x 76.07 ops/sec ±0.41% (77 runs sampled)
map#Set x 190 ops/sec ±2.16% (79 runs sampled)
Fastest is map#Set
```

## Conclusions

1. Prefer Map over Object unless you are doing almost no reads and all writes.
2. Prefer Set over Array unless you are doing almost all pushing and no modification.