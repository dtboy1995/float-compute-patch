# float-compute-patch
patch v8 float compute lose precision

## Translations
[中文](README_CN.md)

# useful if you
- your system has floating-point operations
- involve some amount calculation

# intall
> npm install --save float-compute-patch

# usage
```javascript
// in your entry program.
// for example app.js
var express = require('express');
var app = express();

// just patch here
require('float-compute-patch');
// or for petty format (-.-)
var patch = require('float-compute-patch');

// some routes ...

app.listen(3000);
```
