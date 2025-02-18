// Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.

function curriedAdd(total = 0) {
    return function (num) {
      if (num === undefined) return total;
      return curriedAdd(total + num);
    };
  }
  
  module.exports = { curriedAdd };
  