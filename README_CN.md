# ﻿![float-compute-patch](static/logo.png)

# float-compute-patch [![Build Status](https://travis-ci.org/dtboy1995/float-compute-patch.svg?branch=master)](https://travis-ci.org/dtboy1995/float-compute-patch)
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
// 没有处理运算前 2.2+2.1 在v8中的执行结果是 4.300000000000001. 诸如此类还有很多其他的问题
/*
***
  版本 1.x
***
*/
// 在你的入口程序执行一遍即可，比如app.js在你的业务代码之前require即可
require('float-compute-patch');
// 像下面这样写
var result = 2.2.add(2.1); // 等于4.3 或者这样写也是一样的(2.2).add(2.1)
// 支持链式写法
var result = 2.2.add(2.1).sub(0.5).div(1).mul(2);
/*
***
  版本 2.0.0
***
*/
// 如果你只想像版本1.x中那样使用
require('float-compute-patch').patch(); // 用法和版本1.x一样
// 如果你想像使用普通的函数一样使用
var cal = require('float-compute-patch').cal;
// 像下面这样写
var result = cal(2.2).add(2.1).sub(8);
```

# 接口
- 版本1.x的模式, 调用应该以一个数字类型开始
  - add(number), 加法
  - sub(number), 减法
  - mul(number), 乘法
  - div(number), 除法

- 普通函数的模式, 你应该以cal函数开始并传入一个初始值
  - add(number), 加法
  - sub(number), 减法
  - mul(number), 乘法
  - div(number), 除法

# 测试
> npm run test
