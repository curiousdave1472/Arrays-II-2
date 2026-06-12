// Filter the max length from the words.

var words = ["hello", "world", "foo", "bar"];

//Assign the variable for maxLength.

var maxLength = [];

//Create the function to filter the words with length.

function filterStrings(words,len){



    for (var i = 0; i < 4; i = i +1) {
        

        if (words[i].length <= len) {

         maxLength.push(words[i]);
        }
    }
    return maxLength
    
}
var results = filterStrings(words, 3);
console.log(results);