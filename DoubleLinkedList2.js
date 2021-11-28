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
    var prevNode = null;
    var tempHead = this.head;
    console.log(JSON.parse(JSON.stringify(tempHead)));
    while (tempHead) {
        var temp = tempHead.next;
        tempHead.next = prevNode;
        prevNode = tempHead;
        console.log(JSON.parse(JSON.stringify(temp)));
        if (!temp) {
            break;    
        }
        tempHead = temp;

    }
    return tempHead;
    //this.head = tempHead;
}

var Linked = new LinkedList ();
Linked.Add (1);
Linked.Add (2);
Linked.Add (3);

//console.log(Linked);
console.log(JSON.parse(JSON.stringify(Linked)));
Linked.Reverse ();
console.log(JSON.parse(JSON.stringify(Linked)));