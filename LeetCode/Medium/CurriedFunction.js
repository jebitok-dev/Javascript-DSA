function curryFunction(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) {
      return fn(...args);
    } else {
      return function curriedFn(...moreArgs) {
        return curried(...args, ...moreArgs)
      }
    }
  }
}