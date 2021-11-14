var javaScriptObject = {};
var testArray = [1,3,5,7];

javaScriptObject.array = testArray;
javaScriptObject.name = "BildaDev";
javaScriptObject.city = "Toronto";

console.log (javaScriptObject);

function Human (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    var sport = "Basketball";

    this.getSport = function () {return sport}
    this.setSport = function (elem) {sport = elem;}
}

var Jack = new Human ("Jack","Male",25);

var array1 = [1,2,3,4,5];
Human.prototype.city = "Toronto";
Jack.setSport ("Soccer");

Human.prototype.toString = function () {
    this.age = this.age + array1.length;
    console.log (this.name, this.gender, this.age, this.city, this.getSport());
}

Jack.toString ();

