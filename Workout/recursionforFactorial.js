function facctorial(value){
    if(value === 0){
        return 1
    }
    return value * facctorial(value - 1)
}
console.log(facctorial(5))