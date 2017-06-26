var assert = require('assert');
var cal = require('../index').cal;

var value_add = cal(2.2).add(2.1);
var value_sub = cal(2.2).sub(1.9);
var value_mul = cal(2.2).mul(2.2);
var value_div = cal(2.1).div(0.3);

assert.equal(value_add, 4.3);
assert.equal(value_sub, 0.3);
assert.equal(value_mul, 4.84);
assert.equal(value_div, 7);

console.log('test passed');
