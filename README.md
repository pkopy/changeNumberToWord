# @pkopy/changeNumber

![xxx](https://img.shields.io/badge/npm-2.0.3.-blue.svg)

![size](https://img.shields.io/badge/ninified%20size-3KB-red.svg)

# Install

```
$ npm install @pkopy/changenumber
```

# Usage

```
const change = require("@pkopy/changenumber");

change(121);
//=> "sto dwadzieścia jeden!"

change('mama');
//=> TypeError: This is not a number

change(121.1)
//=> TypeError: This is not a integer number
```