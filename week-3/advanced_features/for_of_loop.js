// ---------- methods: Object.keys(), Object.values(), and Object.entries().-----

const person = {
    name: 'alex',
    age:28,
    hair:'blonde'

}
// these three methods returns array
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// itereting over objects using keys()

// for (key of Object.keys(person)){
//     console.log(key, ':', person[key])
// }


// we can also use for in but it's not reccomended
// .......since it's iterate over objects and prototype as well
for (key in person){
    console.log(person[key])
}




//--------------iterable in array----------
// const colors = ['red','orange','yellow']
// for (color of colors) {
//     console.log(color);
// }

// colors = ['red', 'yellow', 'barl']

// for color in colors:
//     print(color)




// -----------------objects are not iterable in js--------
// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     // console.log(prop)
//     console.log(car.prop)
// }