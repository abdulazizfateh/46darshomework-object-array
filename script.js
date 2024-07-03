// 1TASK
// function moveGreaterThanTwo(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 2) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// let inputArray = [1, 3, 2, 4, 1, 5];
// let outputArray = moveGreaterThanTwo(inputArray);
// console.log(outputArray);



// 2TASK
// function sumEvenOddDifference(arr, promptNumber) {
//     let evenSum = 0;
//     let oddSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenSum += arr[i];
//         } else {
//             oddSum += arr[i];
//         }
//     }
//     let totalSum = evenSum + oddSum;
//     let difference = Math.abs(promptNumber - totalSum);
//     return difference;
// }

// let arr = [1, 2, 3, 4, 5];
// let promptNumber = parseInt(prompt("Enter a number: "), 10);
// console.log(sumEvenOddDifference(arr, promptNumber));



// 3TASK
// function sumEvenBetween(a, b) {
//     if (a >= b) {
//         return "First number should be smaller than the second number.";
//     }
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// let num1 = parseInt(prompt("Enter first number: "), 10);
// let num2 = parseInt(prompt("Enter second number: "), 10);
// console.log(sumEvenBetween(num1, num2));




// 5TASK
// function getObjectValues(obj) {
//     return Object.values(obj);
// }

// let exampleObj = {a: 1, b: 2, c: 3};
// console.log(getObjectValues(exampleObj));


    
// 7TASK
// function removeFours(arr) {
//     return arr.filter(num => num !== 4);
// }

// let exampleArray = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
// console.log(removeFours(exampleArray)); 