[![Build Status](https://travis-ci.org/skaterdav85/pipe-operator.svg?branch=master)](https://travis-ci.org/skaterdav85/pipe-operator)

# pipe-operator

A small library to simulate the pipe operator in languages like Elixir for JavaScript.

## Installation

```
npm install pipe-operator
```

```js
let { take, native } = require('pipe-operator');
```

## Usage

```js
let frequentWords = take(text)
  .pipe(removePunctuation)
  .pipe(removeBadWords)
  .pipe(findMostFrequentWords)
  .result();

function removePunctuation(string) { /* ... */ }
function removeBadWords(string) { /* ... */ }
function findMostFrequentWords(string) { /* ... */ }
```

`pipe()` can also take additional arguments for the passed in function:

```js
let total = take(1)
  .pipe(sum, 3, 2)
  .pipe(sum, 4)
  .result();

// total === 10

function sum(...args) {
  return args.reduce((total, number) => {
    return total + number;
  }, 0);
}
```

If you want to pipe to built-in prototype methods, use the `native()` function:

```js
let languages = take('JavaScript, Elixir, PHP')
  .pipe(native(String.prototype.split, ','))
  .pipe(native(Array.prototype.map, function(string) {
    return string.trim();
  }))
  .result();

// languages === ['JavaScript', 'Elixir', 'PHP']

// OR

let languages = take('JavaScript, Elixir, PHP')
  .pipe(native(String.prototype.split, ','))
  .pipe(native(Array.prototype.map, native(String.prototype.trim)))
  .result();

// languages === ['JavaScript', 'Elixir', 'PHP']
```

Thanks to [Sebastiaan Luca](https://blog.sebastiaanluca.com/enabling-php-method-chaining-with-a-makeshift-pipe-operator) for the API inspiration.
