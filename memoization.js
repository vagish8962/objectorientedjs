const square = (n) => n * n;

function memoization(fn) {
  let cache = {};

  return (...args) => {
    let val = args[0];
    if (val in cache) {
      console.log('cache memory');
      return cache[val];
    } else {
      console.log('calling fun');
      const result = fn(val);
      cache[val] = result;
      return result;
    }
  };
}

const numSquare = memoization(square);

console.log(numSquare(2));
console.log(numSquare(2));
console.log(numSquare(4));
console.log(numSquare(2));
console.log(numSquare(4));
