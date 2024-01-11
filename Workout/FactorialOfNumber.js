// Give An intiger 'n' find the factorial of that number

function factorial(n){
    let result = 1

    for(let i=1; i <= n ; i++){
        result*=i
    }
    return result
}

console.log(factorial(5));

// Big-O = O(n) 