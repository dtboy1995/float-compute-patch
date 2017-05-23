// load the patch
require('../index.js');

function test_add() {
  var a = 2.2;
  var b = 2.1;
  // origin
  console.log('origin output');
  console.log(a+'+'+b+'='+(a+b));
  var c = a.add(b);
  if (c!==4.3) {
    throw new Error('patch add() has error!');
  }else{
    console.log('after patch add()');
    console.log(a+'.add('+b+')='+a.add(b));
  }
}

function test_sub() {
  var a = 2.2;
  var b = 1.9;
  console.log('origin output');
  console.log(a+'-'+b+'='+(a-b));
  var c = a.sub(b);
  if (c!==0.3) {
    throw new Error('patch sub() has error!');
  }else{
    console.log('after patch sub()');
    console.log(a+'.sub('+b+')='+a.sub(b));
  }
}

function test_mul() {
  var a = 2.2;
  var b = 2.2;
  console.log('origin output');
  console.log(a+'*'+b+'='+(a*b));
  var c = a.mul(b);
  if (c!==4.84) {
    throw new Error('patch mul() has error!');
  }else{
    console.log('after patch mul()');
    console.log(a+'.mul('+b+')='+a.mul(b));
  }
}

function test_div() {
  var a = 2.1;
  var b = 0.3;
  console.log('origin output');
  console.log(a+'/'+b+'='+(a/b));
  var c = a.div(b);
  if (c!==7) {
    throw new Error('patch div() has error!');
  }else{
    console.log('after patch div()');
    console.log(a+'.div('+b+')='+a.div(b));
  }
}

test_add();
test_sub();
test_mul();
test_div();

console.log('module test passed!');
