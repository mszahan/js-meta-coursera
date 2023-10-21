var greet = 'Hello';
var place = 'Planet Earth';
var expr = 'Ho - Ho - Ho'

//accessing length
// console.log(greet.length);

//To read each individual character at a specific index in a string, 
// starting from zero, I can use the charAt() method:  
// console.log(greet.charAt(2));

// The concat() method joins two strings:  
// console.log(greet.concat(place));

// The indexOf returns the location of the first position that matches a character:
// The lastIndexOf finds the last match, otherwise it works the same as indexOf. 
// console.log(greet.indexOf('ll'));

// The split method chops up the string into an array of sub-strings:
// console.log(place.split(' '));
// console.log(expr.split('-'));

// There are also some methods to change the casing of strings. For example:  
console.log(greet.toUpperCase());
console.log(place.toLowerCase());