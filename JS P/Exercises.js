
// Exercise 1: FizzBuzz
// let init_val = 1;
// let final_val = 50;

// for (let x = init_val; x <= final_val; x++) {
//     if (x % 3 == 0 && x % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (x % 3 == 0) {
//         console.log("Fizz");
//     } else if (x % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(x)
//     };
// }

// // Exercise 2: String Reversal
// function reversal(string) {
//     let letters = string.split("");
//     console.log(letters);
//     let len = letters.length;
//     let rev_letters = [];
//     let j = 0;

//     for (let i = len; i >= 0; i--) {
//         rev_letters[j] = letters[i];
//         j++;
//         console.log(j);
//     }

//     let reverse = rev_letters.join("");
//     return reverse
// }

// console.log(reversal("food"));

// // A faster solution
// function reversal(string) {
//     return string.split("").reverse().join("");
// }

// Exercise 3: Palindrome Checker

// function pali(input) {
    
//     if (typeof input === "string") {
//         letters = input.split("");
//     }
//     else {
//         letters = input.toString().split("");
//     }

//     let len = letters.length;
//     let j = 0;

//     for (let i = len-1; i >= j; i--) {
//         if (letters[i] == letters[j]) {
//             if (i == j) {
//                 return true;
//             }
//             else {
//                 j++;
//                 continue;}
//             }
//         else {
//             return false;
//         }
//     }
// }

// console.log(pali(123454321))


// // Exercise 4: Check for largest number

// let x = [1, 2, 5, 6, 2, 25];

// function maxi(array) {

//     len = array.length;
//     maxi = array[0];
//     for (let i = 0; i < len - 1; i++) {
//         if (array[i] < array[i+1]) {
//             maxi = array[i+1];
//         } 
//     }

//     return maxi;
// }

// console.log(maxi(x))