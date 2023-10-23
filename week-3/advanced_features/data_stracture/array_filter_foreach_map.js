// ------------------------ map ---------------------
// This method is used to map each array item over to another array's item

const nums = [0,10,20,30,40,50];
nums.map(function(arr){
    return arr/10
})





// ------------forEach-------------------------------------------
// const fruits = ['kiwi','mango','apple','pear'];

// the that will be passed in forEach will have two parameter.....
// .... first one is the array or the value of array......
//......... second is the index of that array.....

// first way of decaling forEach
// function appendIndex(arr, index){
//     console.log(`The no. ${index} item is ${arr}`);
// }
// fruits.forEach(appendIndex);


// second way directly assigning the fucntion
// fruits.forEach(function (arr, index){
//     console.log(`the index of ${arr} fruit is ${index} `)
// })



// -----------------filter---------------------------
// It filters your arrays based on a specific test.

// filter method filters out the only value according to the conditionals
// const nums = [0,10,20,30,40,50];
// nums.filter(function(arr){
//     return arr < 20;
// })
