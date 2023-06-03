function throttle(fn, t) {
  let timeout;
  let lastArgs;
  let shouldExecute = true;

  function execute() {
    fn.apply(this, lastArgs);
    timeout = setTimeout(() => {
      timeout = null;
      if(lastArgs) {
        execute();
      } else {
        shouldExecute = true
      }
    }, t);
    lastArgs = null;
  }

  return function(...args) {
    lastArgs = args;
    if(shouldExecute) {
      execute();
      shouldExecute = false
    }
  }
}