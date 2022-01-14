function sum(a) {
  debugger;
  return function (b) {
    debugger;
    if (b) {
      return sum(a + b);
    }
    debugger;
    return a;
  };
}

sum(3)(4)();

let x = 23;

function a() {
  var x = 2;
  console.log(x);
}
a();
