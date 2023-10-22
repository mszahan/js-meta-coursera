// writing fucntions with try and catch
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")


// using throw error 
// try {
//     throw new ReferenceError();
// } catch (err){
//     console.log(err)
//     console.log('There was a Reference Error')

// }
// console.log('The code did not stopped')


// printing the error
// try {
//     console.log(a+b);
// } catch (error) {
//     console.log(error)

// }
// console.log('The code has not stopped')



// simple try catch
// try {
//     console.log(a+b)
// } catch {
//     console.log('Erron occured')
// }