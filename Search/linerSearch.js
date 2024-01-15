function LinearSearch(arr,target){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}

console.log(LinearSearch([1,2,3,4,5,6,7],3)); // 2
console.log(LinearSearch([1,2,3,4,5,6,7],7)); // 6
console.log(LinearSearch([1,2,3,4,5,6,7],10)); //-1 