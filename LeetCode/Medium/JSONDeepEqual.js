function areDeeplyEqual(o1, o2) {
  if(typeof o1 !== 'object' || typeof o2 !== 'object' || o1 === null || o2 === null) {
    return o1 === o2;
  }

  var keys1 = Object.keys(o1);
  var keys2 = Object.keys(o2);

  if(keys1.length !== keys2.length) {
    return false;
  }

  for(let key of keys1) {
    if(!o2.hasOwnProperty(key) || !areDeeplyEqual(o1[key], o2[key])) {
      return false;
    }
  }
  return true;
}