var myObject = {country:"Canada", city:"Ottawa"}

function myFunc (obj) {
    obj.city = "Toronto";
}

console.log(myObject);
myFunc (myObject);
console.log(myObject);

var city = "Toronto"

function myFunc2 (elem) {
    elem = "Ottawa";
    
}

console.log(city);
console.log (myFunc2(city));
console.log(city);

var points = [40,100,1,5,25,10];
var sorted = points.sort(function(x,y){return x-y});
console.log(sorted);

var classRoom = {
    subject: "Programming",
    year: 2021,
    people: ["Mehan", "Hussam"],
    technologies: {frontend:["HTML","CSS","React"], backend:["Node","MongoDb","SQL"]}
}

console.log(classRoom.technologies.backend[1]);
delete classRoom.technologies.backend[2];
console.log(classRoom);
for (var elem in classRoom) {
    console.log (elem);
    console.log (classRoom.Technologies.frontend);
}
