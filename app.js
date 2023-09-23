console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <=100; i++){
    if (i % 2 != 0) {
        console.log(i);
    } else {

    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <=100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        
        console.log(i , "FIZZBUZZ");
    } else if (i % 3 == 0) {
        
        console.log(i , "FIZZ");
        
    }else if (i % 5 ==0){

        console.log(i , "BUZZ");
    }else {

    }
}

// Exercise 3 - Repeat Exercise 1
console.log("EXERCISE 3 - Odd Numbers - WHILE Loop:\n==========\n");
let i = 1;
while (i <= 100) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

console.log("EXERCISE 3 - Odd Numbers - DO/WHILE Loop:\n==========\n");

let j = 1;
do {
    if (j % 2 != 0) {
        console.log(j);
    }
    j++;
} while (j <= 100); 
    
// Exercise 3 - Repeat Exercise 2
console.log("EXERCISE 3 - FIZZBUZZ - WHILE Loop:\n==========\n");
let k = 1;

while (k <= 100){
    if (k % 3 == 0 && k % 5 == 0) {
        
        console.log(k , "FIZZBUZZ");
    } else if (k % 3 == 0) {
        
        console.log(k , "FIZZ");
        
    }else if (k % 5 ==0){

        console.log(k , "BUZZ");
    }else {

    }
    k++
}

console.log("EXERCISE 3 - FIZZBUZZ - DO/WHILE Loop:\n==========\n");
let l = 1;
do {
    if (l % 3 == 0 && l % 5 == 0) {
        
        console.log(l , "FIZZBUZZ");
    } else if (l % 3 == 0) {
        
        console.log(l , "FIZZ");
        
    }else if (l % 5 ==0){

        console.log(l , "BUZZ");
    }else {

    }
    l++
} while (l <= 100);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


