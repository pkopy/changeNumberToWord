# @pkopy/changeNumber

![xxx](https://img.shields.io/badge/npm-2.1.1.-blue.svg) ![size](https://img.shields.io/badge/ninified%20size-3KB-red.svg)

This package changes number into words in Polish. Range from 0 to 999 999 999

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