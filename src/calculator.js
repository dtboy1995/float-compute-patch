function add(a, b) {
  // ignore both of integer
  if (a.toString().indexOf('.') == -1 && b.toString().indexOf('.') == -1) {
    return a + b;
  }
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

function sub(a, b) {
  // ignore both of integer
  if (a.toString().indexOf('.') == -1 && b.toString().indexOf('.') == -1) {
    return a - b;
  }
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

function mul(a, b) {
  // ignore both of integer
  if (a.toString().indexOf('.')==-1 && b.toString().indexOf('.')==-1) {
    return a * b;
  }
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {}
  try {
    c += e.split(".")[1].length;
  } catch (f) {}
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

function div(a, b) {
  // ignore both of integer
  if (a.toString().indexOf('.')==-1 && b.toString().indexOf('.')==-1) {
    return a / b;
  }
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) {}
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) {}
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
// patch number prototype
Number.prototype.add = function(v) {
  return add(this, v);
};
Number.prototype.sub = function(v) {
  return sub(this, v);
};
Number.prototype.mul = function(v) {
  return mul(this, v);
};
Number.prototype.div = function(v) {
  return div(this, v);
};
