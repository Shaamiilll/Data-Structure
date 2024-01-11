function sumOfDigits(n) {
    if(n<10){
        return n
    }
    // n%10 it will give us last digit of n 
    return n%10 + sumOfDigits(Math.floor(n/10))
}
console.log(sumOfDigits(12));
