//Destructuring in objects

const syllabus ={
    chapterone:"arrays",
    chaptertwo:"objects",
    chapterthree:"functions"
}

const {chapterone:one} = syllabus;

//console.log(chapterone);//output:arrays
console.log(one);//output:arrays

//array destructuring

let numbers = [1, 2, 3, 4, 5];

let [first, second, third, fourth, fifth] = numbers;

console.log(first);   // Output: 1
console.log(second);  // Output: 2
console.log(third);   // Output: 3
console.log(fourth);  // Output: 4
console.log(fifth);   // Output: 5