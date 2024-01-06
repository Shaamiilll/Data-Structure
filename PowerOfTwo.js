// Give a Positive Intiger 'n' and determine if the number is a power of 2 or not

function isPowerOftwoBitwise(n){
    if(n < 1){
        return false
    }
    return (n & (n - 1)) === 0
}

console.log(isPowerOftwoBitwise(1));
console.log(isPowerOftwoBitwise(2));
console.log(isPowerOftwoBitwise(5));



// function isPowerOftwo(n){
//     if(n < 1){
//         return false
//     }
//     while(n>1){
//         if(n % 2 !==0){
//             return false
//         }
//         n= n/2
//     }
//     return true
// }

// console.log(isPowerOftwo(1)); // True
// console.log(isPowerOftwo(2)); // True
// console.log(isPowerOftwo(5)); // False

// // Big O = O(logn)