function personFullName () {
    return this.firstName + ' ' + this.lastName;
}

function personFullNameReversed () {
    return this.lastName + ' ' + this.firstName;
}

function Person (first, last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}

var John = new Person ("Lebron","James");
console.log (John);
console.log (John.fullNameReversed());

var s = "Cat";

String.prototype.reversed = function () {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
}

console.log (s.reversed());

function ClassRoom () {}

ClassRoom.prototype.subject = function () {
    console.log ("I am a subject");
}

function Programming () {}

Programming.prototype = new ClassRoom ();

Programming.prototype.subject = function () {
    console.log ("I am a Programming subject")
}

var classVar = new Programming ();
classVar.subject ();

var Sub = new ClassRoom ();
Sub.subject ();

console.log (classVar instanceof Programming);
console.log (classVar instanceof ClassRoom);

function makeAdder (a) {
    console.log (a);

    return function (b) {
        console.log (b);
        return a + b;
    }
}

var x = makeAdder (5);
console.log (x);
var y = makeAdder (20);

console.log ( x(6) );
console.log ( y(7) );

