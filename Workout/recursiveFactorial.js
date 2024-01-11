// function factorial(n) {
//     if(n===0){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5));

    let nums=[1,1,1]

    let disAppearedNumber = []
    for(let i=0; i< nums.length; i++){
        let index = Math.abs(nums[i]) -1
     
        if(nums[index]> 0){
            nums[index] = -nums[index]
            console.log(nums[index]);
        }
    }
    console.log(nums);
    for(let i=0; i< nums.length; i++){
        if(nums[i] > 0){
            disAppearedNumber.push(i+ 1)
        }
    }
 


    console.log(disAppearedNumber)

const n = nums.length;
    const newSet = new Set(nums);

    for(let i = 1; i<= n;i++){
        if(!newSet.has(i)){
            disAppearedNumber.push(i);
        }
    }