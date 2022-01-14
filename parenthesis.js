const paren = (str) => {
  const stack = [];
  const parObj = {
    '{': '}',
  };
  for (const s of str) {
    if (parObj[s]) {
      stack.push(s);
    } else {
      const last = stack.pop(); // {
      if (s !== parObj[last]) return false;
    }
  }
  return true;
};

// console.log(paren('{{}}'));
console.log(paren('{{}}'));
