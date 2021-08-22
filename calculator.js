const add = function (...nums) {
  if (nums === []) return 0;
  let total = 0;
  nums.forEach((item) => {
    total += parseInt(item,10);
  });
  return total;
};

const subtract = function (...nums) {
  const finalValue = nums.reduce((accumulator, currentValue) => {
    return accumulator - currentValue;
  });
  return finalValue;
};

const sum = function (nums) {
  try {
    return nums.reduce((acc, cur) => {
      return acc + cur;
    });
  } catch (e) {
    return 0;
  }
};

const multiply = function (nums) {
  return nums.reduce((acc, cur) => {
    console.log(acc, cur)
    return acc * cur;
  });
};

const power = function (...nums) {
  return nums.reduce((acc, cur) => {
    return acc ** cur;
  });
};

const factorial = function (factor) {
  if (!factor && isNaN(factor)) return;
  if (factor == 0 || factor === 1) {
    return 1;
  }
  return factor * factorial(factor - 1);
};

// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial,
// };
