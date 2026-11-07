/*!
 * MathAwesome v1.0.0
 * A simple math library by gittykurt78
 */

const MathAwesome = (function() {
  
  // Private function (users of the library can't see or break this)
  function checkNum(n) {
    if (typeof n !== 'number' || isNaN(n)) {
      throw new Error("MathAwesome: Please provide valid numbers.");
    }
  }

  // Return the public API (the functions people can actually use)
  return {
    // Addition
    add: function(a, b) {
      checkNum(a); checkNum(b);
      return a + b;
    },

    // Subtraction
    subtract: function(a, b) {
      checkNum(a); checkNum(b);
      return a - b;
    },

    // Multiplication
    multiply: function(a, b) {
      checkNum(a); checkNum(b);
      return a * b;
    },

    // Division
    divide: function(a, b) {
      checkNum(a); checkNum(b);
      if (b === 0) {
        throw new Error("MathAwesome: Cannot divide by zero!");
      }
      return a / b;
    },

    // Bonus: Add a whole list of numbers together
    addAll: function(...numbers) {
      return numbers.reduce((sum, num) => {
        checkNum(num);
        return sum + num;
      }, 0);
    }
  };

})();
