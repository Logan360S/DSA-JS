/* 
#Question1 
##Create an Array object.
*/

var Array1 = [1.5,true,"Strings",52,88];
console.log (Array1);

var Array2 = [];
Array2 [0] = "Hello";
console.log [Array2];

var Array3 = new Array (52,"Hello",88,false,11.5)
console.log (Array3);

/*
#Question 2 

##Take this array var array = [1,2,3,4,5] and copy it using

	
  >the slice method and the for loop method
  */

var array = [1,2,3,4,5];

var ArraySlice = array.slice(0,array.length);
console.log (ArraySlice);

var ArrayLoop = [];

for (let x=0; x < array.length; x++) {
    ArrayLoop[x] = array[x];
}
console.log (ArrayLoop);

/*
#Question 3

##Empty this array var array = [1,2,3,4,5]
*/

var arrayCopy = [1,2,3,4,5];
var arrayCopy1 = arrayCopy;
// arrayCopy = []
arrayCopy.length = 0;
console.log (arrayCopy, arrayCopy1);

/*
#Question 4
##What type is an Array set to?
*/

console.log (typeof(arrayCopy));

/*
#Question 5
##How can you check if something is an Array?
*/

console.log (Array.isArray(arrayCopy));

console.log (Array.isArray("Hello"));

/*
#Question 6
##Add an item to the end of an array.
*/
var arrayPush = [1,3,5,7,9]
arrayPush.push("World");
console.log (arrayPush);

/*
#Question 7
##Find the index position of d in this array 
var arr= ['a','b','c','d'];
*/

var arr= ['a','b','c','d'];
console.log (arr.indexOf('c'));
console.log (arr.indexOf('C'));

/*
#Question 9 
##Write a function to check if milk exists in your array
var items = ['milk', 'bread', 'sugar'];
*/

/* 
we need to go through each index value and check if 'milk' is a value

*/

function CheckMilk (Arr) {
    
    if (Arr.indexOf('milk')>= 0) {
        return true;
    }
    
    return false;
}

var items = ['milk', 'bread', 'sugar'];
var items2 = ['bread', 'sugar'];

console.log (CheckMilk(items), CheckMilk(items2));

/*
#Question 10
##Now you've found milk exists add some code to find the index of milk and remove that item.
*/

// 

function CheckItem (Arr) {
    
    if (Arr.indexOf('milk')>= 0) {
        Arr.splice(Arr.indexOf('milk'),1);
        console.log (Arr);
    } else {

        Arr.push('milk');
        console.log (Arr);
    }
    return Arr;
}

var items3 = ['milk', 'bread', 'sugar'];
var items4 = ['bread', 'sugar'];

console.log (CheckItem(items3), CheckItem(items4));

// Shift and unshift

var a = [];


// console.log (a.unshift (1,2,3));
var b = a.unshift (1,2,3);
console.log(b);
console.log(a);

// #Question 17

// ##Using reduce add all these numbers
 var numbers = [1, 2, 3, 4, 5, 6];
 const reducer = function reduction (preValue, curValue) {
     return preValue * curValue;
 }
 
 var sum = numbers.reduce(reducer);
console.log(sum);

// #Question 18
// ##Flatten this array to one single array using reduce
var array = [[0, 1],
             [2, 3],
             [4, 5]];

function flat (arr) {
    var newFlat = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            newFlat.push(arr[i][j]);
        }
    }
    return newFlat;
}

console.log(flat(array));

// #Question 19
// ##Filter this array to return just the dogs

var animals = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"dog"}
]

function dogSpecies (Arr) {
    var arrEmpty = [];
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i].species === "dog") {
            arrEmpty.push (Arr[i]);
        }
    }
    return arrEmpty;
}

console.log (dogSpecies(animals));

// #Question 20
// ##Using array in question 19 use map function 
// to return all the species

var animals2 = [
    { name: "Jason", species:"rabbit"},
    { name: "Jessica", species:"dog"},
    { name: "Jacky", species:"owl"},
    { name: "Luke", species:"fish"},
    { name: "Junior", species:"rat"},
    { name: "Thomas", species:"cat"}
]

var mapFunc = animals2.map (function mapping (elem) {
    return elem;

});

console.log (mapFunc)

