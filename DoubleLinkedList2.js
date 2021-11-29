function Node (data) {
    this.data = data;
    this.next = null;    
}

function LinkedList () {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.IsEmpty = function () {
    if (this.size === 0) {
        return true;
    }

    return false;
}

LinkedList.prototype.Add = function (data) {
    var node = new Node (data);
    if (this.IsEmpty () === true) {
        this.head = node;
    } else {
        var tempHead = this.head;
        while (tempHead.next != null) {
            tempHead = tempHead.next
        }
        tempHead.next = node;
    }
    this.size ++;
}

LinkedList.prototype.Reverse = function () {
    // iterate through each node and set the .next property on the current node to the previous node
    var prev = null;
    var curr = this.head;
    var next;
    
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
}

LinkedList.prototype.Delete = function (curr) {
    var tempHead = this.head;
    console.log ("Hi");
    if (tempHead.data === curr) {
        this.head = this.head.next;
        this.size --;
    }

    while (tempHead.next.data != curr || tempHead.next != null) {
        tempHead = tempHead.next;
    }
    if (tempHead.next.data === curr) {
        var next = tempHead.next.next;
        tempHead.next = next;
        this.size --;
    }
}

LinkedList.prototype.RemoveDuplicates = function () {
    // iterate through each node and check all other nodes in forward linked list for duplicates

    var tempHead = this.head;
    var obj = {"curr":tempHead.data};
    console.log (obj);
    while (tempHead.next.next != null) {
        var curr = tempHead.data;
        if (obj.curr !== curr) {
            obj.curr = curr;
        } else {
            console.log("Hello");
            var next = tempHead.next;
            tempHead.next = next;
            this.size --;
        }
    }
}

var Linked = new LinkedList ();
Linked.Add (1);
Linked.Add (2);
Linked.Add (3);
Linked.Add (3);
Linked.Add (2);

//console.log(Linked);
console.log(JSON.parse(JSON.stringify(Linked)));
// Linked.Reverse ();
// console.log(JSON.parse(JSON.stringify(Linked)));
// Linked.RemoveDuplicates();
// console.log(JSON.parse(JSON.stringify(Linked)));