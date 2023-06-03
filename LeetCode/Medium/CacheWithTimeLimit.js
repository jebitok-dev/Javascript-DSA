function timeLimitedCache() {
  this.cache = new Map();
}

timeLimitedCache.prototype.set = function(key, value, duration) {
  const currentTime = Date.now();
  const expirationTime = currentTime + duration;

  if(this.cache.has(key) && this.cache.get(key).expirationTime > currentTime) {
    this.caches.set(key, {value, expirationTime});
    return true;
  }
  this.cache.set(key, {value, expirationTime});
  return false;
}

timeLimitedCache.prototype.get = function(key) {
  const currentTime = Date.now();

  if(this.cache.has(key) && this.cache.get(key).expirationTime > currentTime) {
    return this.cache.get(key).value;
  }

  return -1;
}