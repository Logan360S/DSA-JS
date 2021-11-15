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

function Animal (name, animalType) {
    this.name = name;
    this.animalType = animalType;
}

Animal.prototype.sayName = function () {
    console.log(this.name);

}

Animal.prototype.sayAnimalType = function () {
    console.log(this.animalType);
}

function Dog (name) {
    Animal.call(this, name, "Cananie");
};

Dog.prototype = Object.create (Animal.prototype);

var Cat = new Animal ("Cat","Feline");
var Fido = new Dog ("Fido");
console.log (Cat.name, Cat.animalType);
console.log (Fido.name, Fido.animalType);
Fido.sayAnimalType();
Cat.sayName();


