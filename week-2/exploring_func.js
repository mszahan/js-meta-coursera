// writing a fuction to match the letter in word
function matchLetter(word, match){
    for (let indx=0; indx < word.length; indx++){
        if (word[indx] == match) {
            console.log('---Match found at ', indx);
        } else{
            console.log('No match found at', indx)
        }
    }
}

matchLetter('word', 'r');


// creating funtion to print all the element of an array
function arrayItems (arr){
    for (let indx = 0; indx < arr.length; indx++){
        console.log(arr[indx]);
    }
}

let colors = ['red', 'blue', 'yellow', 'orange', 'indigo'];
// arrayItems(colors);
