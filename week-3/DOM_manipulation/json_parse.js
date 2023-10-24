const jsonStr = '{"Name": "alex", "Age":27}';
// parse method converts the json string into js object
const alex =JSON.parse(jsonStr);
console.log(alex.Age)

// stringify method convert object into JSON string
// js comment doesn't work in stringify
// and it exlucdes object method for the json string
const backToStr = JSON.stringify(alex);
console.log(backToStr);