function power(base, exponent) {
    // Base case: any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }

    // Recursive case: base^exponent = base * base^(exponent-1)
    return base * power(base, exponent - 1);
}
// Example usage:
console.log(power(2, 3)); // Output: 8 (2^3)
console.log(power(34, 89)); // Output: 25 (5^2)
console.log(power(3, 0)); // Output: 1 (3^0)
