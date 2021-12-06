function Queue () {
    this.queue = new Array ();
}

Queue.prototype.isEmpty = function () {
    return this.queue.length === 0;
}

Queue.prototype.insert = function (value) {
    this.queue.push(value);
}

Queue.prototype.dequeue = function () {
    return this.queue.shift();
}

Queue.prototype.peek = function () {
    return this.queue[0];
}

var Que1 = new Queue();
Que1.insert("a");
Que1.insert("b");
Que1.insert("c");
Que1.insert("d");
console.log(Que1);

console.log(Que1.dequeue());
console.log(Que1.dequeue());
Que1.insert("Q");
console.log(Que1.peek());