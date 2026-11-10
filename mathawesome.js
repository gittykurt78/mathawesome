/*!
 * MathAwesome v1.1.0
 * A simple math library by gittykurt78
 */

const MathAwesome = (function() {
  
  // Private function
  function checkNum(n) {
    if (typeof n !== 'number' || isNaN(n)) {
      throw new Error("MathAwesome: Please provide valid numbers.");
    }
  }

  // Return the public API
  return {
    add: function(a, b) {
      checkNum(a); checkNum(b);
      return a + b;
    },

    subtract: function(a, b) {
      checkNum(a); checkNum(b);
      return a - b;
    },

    multiply: function(a, b) {
      checkNum(a); checkNum(b);
      return a * b;
    },

    divide: function(a, b) {
      checkNum(a); checkNum(b);
      if (b === 0) {
        throw new Error("MathAwesome: Cannot divide by zero!");
      }
      return a / b;
    },

    addAll: function(...numbers) {
      return numbers.reduce((sum, num) => {
        checkNum(num);
        return sum + num;
      }, 0);
    },

    // --- NEW FUNCTIONS BELOW ---

    power: function(base, exponent) {
      checkNum(base); checkNum(exponent);
      return Math.pow(base, exponent);
    },

    sqrt: function(num) {
      checkNum(num);
      if (num < 0) {
        throw new Error("MathAwesome: Imaginary!");
      }
      return Math.sqrt(num);
    }
  };

})();
