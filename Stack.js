function Stack () {
    this.array = [];
};

Stack.prototype.IsEmpty = function () {
    if (this.array.length === 0) {
        return true;
    } else {
        return false;
    }
};

Stack.prototype.Peek = function () {
    return this.array[this.array.length-1];
};

Stack.prototype.Push = function (value) {
    this.array.push(value);
};

Stack.prototype.Pop = function () {
    return this.array.pop();
};

// var Arr = ["a","b","c","d"];
var Stack1 = new Stack();

Stack1.Push("a");
Stack1.Push("b");
Stack1.Push("c");
Stack1.Push("d");

console.log(Stack1);
console.log(Stack1.Peek());
console.log(Stack1.Pop());
console.log(Stack1);

