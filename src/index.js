module.exports.take = function take(value) {
  return new Pipe(value);
};

module.exports.native = function native(fn, ...args) {
  return function(object) {
    return fn.apply(object, args);
  };
};

class Pipe {
  constructor(value) {
    this.firstArg = value;
  }

  pipe(fn, ...args) {
    let result = fn(...[this.firstArg].concat(args));
    return new Pipe(result);
  }

  result() {
    return this.firstArg;
  }
}
