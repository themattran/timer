const numbers = process.argv.slice(2);

const beep = () => {
  process.stdout.write('\x07');
};

for (const num of numbers) {
  const isUndefined = num === undefined;
  const isEmpty = num === [];
  const isNegative = num < 0;
  const delay = num * 1000;

  if (isUndefined || isEmpty || isNegative) {
    return;
  }

  setTimeout(() => {
    beep();
  }, delay);
}

/**
 * Suggestions:
 * - Overall, good work on this.
 * 1. Please remove extra spacing and extra lines of code before submitting.
 * 2. Please remove `console.log` or test code before submitting.
 * 3. use `const` instead of `let`
 * - be aware of data type (primitive vs non-primitive)
 * 4. Chain methods together for readability and less code
 * 5. Instead of returning, if we get a false value. We can also check for true.
 * 6. Save the conditions in variable for readability
 * 7. Can modify code to be in one line
 * 8. use `for of` loop to iterate through array instead of `for` to improve readability
 * 9. Break down functions into single responsibility
 */

/* Alternative Solution

const play = () => {
  // process.stdout.write(".");
  console.log(".");
};

const scheduleBeep = (delay) => {
  const num = Number(delay);
  const isNum = Number.isInteger(num);
  const isPositive = num > 0;

  if (isNum && isPositive) {
    setTimeout(() => {
      play();
    }, num);
  }
};

const numbers = process.argv.slice(2);
for (const num of numbers) {
  scheduleBeep(num);
  
  */