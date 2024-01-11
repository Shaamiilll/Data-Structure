function SumOfNumber(number) {
  const digit = String(number).split("");
  const sum = digit.reduce((total, digits) => {
    return (total += parseInt(digits));
  }, 0);
  return sum;
}

console.log(SumOfNumber(123));

