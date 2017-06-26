# ![float-compute-patch](static/logo.png)

# float-compute-patch
patch v8 float compute lose precision

## Translations
[中文](README_CN.md)

# useful if you
- your system has floating-point operations
- involve some amount calculation

# install
> npm install --save float-compute-patch

# usage
```javascript
// without patch 2.2+2.1 in v8 = 4.300000000000001. and so on,there are many problems
/*
***
  version 1.x
***
*/
// just execute once at your entry program for expample app.js
require('float-compute-patch');
// write like below
var result = 2.2.add(2.1); // = 4.3 or write like this (2.2).add(2.1)
// support chain write
var result = 2.2.add(2.1).sub(0.5).div(1).mul(2);
/*
***
  version 2.0.0
***
*/
// if you just want to add it to the Number prototype
require('float-compute-patch').patch(); // like the v1 version
// if you just want to use an ordinary function
var cal = require('float-compute-patch').cal;
// write like below
var result = cal(2.2).add(2.1).sub(8);
```

# api
- mode of patch Number prototype, you should start with a number
  - add(number), addition
  - sub(number), subtraction
  - mul(number), multiplication
  - div(number), division

- mode of ordinary function, you should start with cal(number)
  - add(number), addition
  - sub(number), subtraction
  - mul(number), multiplication
  - div(number), division

# test
> npm run test
