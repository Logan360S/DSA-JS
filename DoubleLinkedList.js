function Node (data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function Linkedlist () {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

Linkedlist.prototype.IsEmpty = function () {
    if (this.size === 0) {
        return true;
    }

    return false;
}

Linkedlist.prototype.Add = function (data) {
    var node = new Node (data)
    if (this.IsEmpty () === true) {
        this.head = node;
        this.tail = this.head;
    } else {
        var headTemp = this.head;
        while (headTemp.next != null) {
            headTemp = headTemp.next;
        }
        headTemp.next = node;
        headTemp.next.prev = headTemp;
        this.tail = headTemp.next;

    }

    this.size ++;
}

Linkedlist.prototype.Delete = function () {
    if (this.IsEmpty () === true) {
        console.log ("Nothing to delete");
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    this.size --;
}

Linkedlist.prototype.InsertTail = function (data) {
    var node = new Node (data);
    if (this.IsEmpty () === true) {
        this.head = node;
        this.tail = this.head;
    } else {
        this.tail.next = node;
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next;
    }
    this.size ++;
}

Linkedlist.prototype.DeleteHead = function () {
    if (this.IsEmpty () === true) {
        console.log ("Nothing to delete");
    } else {
        if (this.head.next != null) {
            this.head = this.head.next;
            this.head.prev = null;

        } else {
            this.head = null;
        }
        this.size --;
    }
    
}

var Link = new Linkedlist ();
Link.InsertTail (21)
Link.InsertTail ("Bye")
Link.InsertTail (64)
console.log (Link);

// Link.Delete ();
// Link.Delete ();
// console.log (Link);