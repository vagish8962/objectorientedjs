//bind polyfill
const nameObj = {
  firstName: 'Vagish',
  lastName: 'Gupta',
};

const getFullName = function (location) {
  console.log(this.firstName + '' + this.lastName + '' + location);
};

// bind function
Function.prototype.myBind = function (...args) {
  const fn = this;
  const parms = args.slice(1);
  return (...args1) => {
    fn.apply(args[0], [...parms, ...args1]);
  };
};

//const detailHandler1 = getFullName.myBind(nameObj, 'Jhansi')
// detailHandler1('UP')

// Bind function without call
Function.prototype.customBind = function (currentContext = {}, ...arg) {
  if (typeof this !== 'function') {
    throw new Error(this + "cannot be bound as it's not callable");
  }
  currentContext.fn = this;
  return function () {
    return currentContext.fn(...arg);
  };
};

const detailHandler2 = getFullName.customBind(nameObj, 'Jhansi');
detailHandler2();
