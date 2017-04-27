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
// in your entry program.
// for example app.js
var express = require('express');
var app = express();

// just patch here
require('float-compute-patch');
// or for neat format (-.-)
var patch = require('float-compute-patch');

// some routes ...
app.listen(3000);

// in service code
// for expample account.js
var a = 2.2;
var b = 2.1;
// normal
var c = a + b;
// after patch addition
var c = a.add(b);
// after patch subtraction
var c = a.sub(b);
// after patch multiplication
var c = a.mul(b);
// after patch division
var c = a.div(b);

// or for petty format (-.-)
var c = (a).add(b);
// chain writing
var c = (a).add(b).sub(b).mul(a).div(b);
```

# test
> npm run test
