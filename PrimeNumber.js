// Give a Natural Number determine if Prime or Not

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for(let i = 2 ; i < n ; i ++){
    if(n%i===0){
        return false
    }
  }
  return true
}

console.log(isPrime(1)); //False
console.log(isPrime(5)); //True
console.log(isPrime(4)); //False

// Big-O = O(n)
