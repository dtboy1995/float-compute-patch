# float-compute-patch
v8虚拟机浮点数失精度补丁

## Translation
[英文](README.md)

# 什么情况下使用
- 你的系统有浮点数计算的操作
- 系统中涉及到了一些有精度要求的金额计算

# 安装
> npm install --save float-compute-patch

# 使用
```javascript
// 在你的入口程序
// 例如 app.js
var express = require('express');
var app = express();

// 写到你业务代码的前头
require('float-compute-patch');
// 为了好看这样写 (-.-)
var patch = require('float-compute-patch');

// 一些路由 ...

app.listen(3000);
```