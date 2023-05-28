function timeLimitPromise(fn, t) {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      const timeOut = setTimeout(() => {
        reject("Time Limit Exceeded")
      }, t);

      fn(...args)
        .then((result) => {
          clearTimeout(timeOut);
          resolve(result);
        })
        .catch((err) => {
          clearTimeout(timeOut);
          resolve(err);
        })
    })
  }
}