// function twoNumberSum(array, target) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [array[i], array[j]];
//             }
//         }
//     }
//     return [];
// }

// const array = [1, 2, 34, 2, 12, 3, 7, 6, 4, 2, 3, 2, 2, 2];
// const target = 10;
// const result = twoNumberSum(array, target);

// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

// function twoNumberSum(array, target) {
//     const set = new Set();
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         let match = target - num;
//         if (set.has(match)) {
//             return [num, match];
//         } else {
//             set.add(num);
//         }
//     }
//     return [];
// }

// const array = [1, 2, 34, 2, 12, 3, 7, 6, 4, 2, 3, 2, 2, 2];
// const target = 10;
// const result = twoNumberSum(array, target);

// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }
// let nums = [2, 7, 11, 15];
// var twoSum = function (nums, target) {
//     const set = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         let match = target - num;

//         if (set.has(match)) {
//             return [num, match];
//         } else {
//             set.add(num);
//         }
//     }
// };

// const result = twoSum(nums, 9);
// console.log(result);

let nums = [3, 2, 4];
var twoSum = function (nums, target) {
  const number = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let match = target - num;

    if (number.has(match)) {
      return [number.get(match), i];
    } else {
      number.set(num, i);
    }
  }
};

const result = twoSum(nums, 6);
console.log(result);
