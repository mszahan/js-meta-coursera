class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"



// inheritance
// class Animal { /* ...class code here... */ }
// class Bird extends Animal { /* ...class code here... */ }
// class Eagle extends Bird { /* ...class code here... */ }


// // defining object basic declaration and creating instance
// class Animal {
//     //codes
// }
// //one way
// myPet = Object.create(Animal);

// // another more used way
// yourPet = new Animal();