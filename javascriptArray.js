//****** Array Methods ****************************************

//Splice()
const arrayName= ['Paula','Reilly','otro','Tonia','Mathi'];
arrayName.splice(2,1);
//                | | 
//                | Delete Count number of elements to remove
//                |
//           start in which start changing

//pop()
//Delete the last element of the array
arrayName.pop(); 


//forEach()

var raceResults = ['Hellen', 'John', 'Peter', 'Mery'];
raceResults.forEach(function(elem, index){
console.log(elem + ' finished the race in ' + (index+1) + ' position!');
});

// it will print the stars 

//*
//**
//***
//****
//*****
function printStarts(howMany){
console.log("*".repeat(howMany));
}

[1,2,3,4,5].forEach(function(ele){
printStarts(ele);
})

//*************************************************************** */
//************ Array Functions */

// split()

let phrase = "This is long enough for a string to count it words";
let words = phrase.split(" ");

console.log(words);
console.log(words[0]);
console.log(words.length);

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
/*function highAndLow(numbers){
// ...
let arrayNum=numbers.split(' ').map(function(item){
  return parseInt(item,10);
});
return arrayNum
}

let arrayNumbers=highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");

let numMax = Math.max(...arrayNumbers);
let numMin = Math.min(...arrayNumbers);
console.log(numMin,numMax)*/

function highAndLow(numbers){
// ...
let arrayNum=numbers.split(' ').map(function(item){
  return parseInt(item,10);
});
return  '${Math.max(...arrayNum)} , ${Math.min(...arrayNum)}';
}


highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");