var fizzBuzz = function(n) {
    var answer = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer[i-1] = "FizzBuzz";
        } else if (i % 3 === 0) {
            answer[i-1] = "Fizz";
        } else if (i % 5 === 0) {
            answer[i-1] = "Buzz";
        } else {
            answer[i-1] = i.toString();
        }
    }
    
    return answer;
};

var temp = fizzBuzz(3);
console.log(temp);

var temp = fizzBuzz(5);
console.log(temp);

var temp = fizzBuzz(9);
console.log(temp);

var temp = fizzBuzz(15);
console.log(temp);