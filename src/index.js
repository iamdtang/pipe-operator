module.exports = function take(value) {
  return new Pipe(value);
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
