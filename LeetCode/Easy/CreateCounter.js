// like concept used in redux

function createCounter(init) {
  let counter = init;

  return {
    increment: function() {
      counter++;
      return counter;
    },

    decrement: function() {
      counter--;
      return counter;
    },

    reset: function() {
      counter = init;
      return counter;
    }
  }
}

