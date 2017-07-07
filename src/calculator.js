function bothInteger(value, valued) {
  return value.toString().indexOf('.') == -1 && valued.toString().indexOf('.') == -1;
}

function getFloatLen(value) {
  var arrs = value.toString().split(".");
  if (arrs.length === 1) {
    return 0;
  }else{
    return arrs[1].length;
  }
}

function floatToInt(value) {
  return Number(value.toString().replace(".", ""));
}

function add(a, b) {
  if (bothInteger(a, b)) {
    return a + b;
  }
  var c, d, e;
  c = getFloatLen(a);
  d = getFloatLen(b);
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

function sub(a, b) {
  if (bothInteger(a, b)) {
    return a - b;
  }
  var c, d, e;
  c = getFloatLen(a);
  d = getFloatLen(b);
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

function mul(a, b) {
  if (bothInteger(a, b)) {
    return a * b;
  }
  var c = 0;
  c += getFloatLen(a);
  c += getFloatLen(b);
  return floatToInt(a) * floatToInt(b) / Math.pow(10, c);
}

function div(a, b) {
  if (bothInteger(a, b)) {
    return a / b;
  }
  var c, d, e ,f;
  e = getFloatLen(a);
  f = getFloatLen(b);
  return c = floatToInt(a), d = floatToInt(b), mul(c / d, Math.pow(10, f - e));
}

var operators = {
  add: add,
  sub: sub,
  mul: mul,
  div: div
}

function calculator(value) {
  this.value = value;
}

function loop(Type, fn) {
  Object.keys(operators).forEach(function (value) {
    Type.prototype[value] = function (v) {
      checkType(v);
      return fn.call(this, operators[value], v);
    }
  });
}

loop(calculator, function (operator, v) {
  this.value = operator(this.value, v);
  return this.value;
});

function checkType(value) {
  if (typeof value !== 'number') {
    throw new Error('only accept a number value!');
  }
}

exports.patch = function () {
  loop(Number, function (operator, v) {
    return operator(this, v);
  })
}

exports.cal = function (value) {
  checkType(value);
  return new calculator(value);
}
