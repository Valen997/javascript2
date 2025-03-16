//Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
     return str.split('').reverse().join('');
}


//Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}

//Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence
        .split(' ') // Split the sentence into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' '); 
}

//Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}


//Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


//Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    return arr.filter(condition);
}

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = num => num % 2 === 0;
const filteredArray = filterArray(numbers, isEven);

console.log(filteredArray); 

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    // Check divisibility from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Prime number
}



//Fibonacci Sequence:(to re look)
function generateFibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array if the input is not positive
    }

    let fibonacci = [0]; // Start with the first Fibonacci number
    if (n > 1) {
        fibonacci.push(1); // Add the second Fibonacci number
    }

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}
