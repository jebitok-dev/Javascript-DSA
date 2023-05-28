function MemoizeResult(fn) {
 const cache = new Map();

 return function(...args) {
  const key = JSON.stringify();
  if(cache.has(key)) {
    return cache.get(key);
  } else {
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
 }
}