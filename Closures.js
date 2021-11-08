function Conatation (str) {
    return function (str2) {
        return str + " " + str2;    
    }
}

var Hello = Conatation ("Hello");

console.log (Hello ("World"));

console.log (Hello);

function makeFunc() {
    var name = 'Mozilla';
    function displayName () {
        alert (name);
    }
    return displayName;
}

makeFunc();
var myFunc = makeFunc();
console.log (myFunc);
// myFunc();

function outer () {
    var x = 5;
    function inner () {
        alert (x);
    }
    setTimeout (inner,2000);
}

outer ();

function main () {
    var mv = document.getElementById('mover');
    var counter = 100;
    var tick = setInterval (function () {
        console.log (tick);
        mv.style.top = counter + "px";
        counter += 1;
        if (counter > 500) {
            clearInterval(tick);
        }
    },1000);
}

main ();
