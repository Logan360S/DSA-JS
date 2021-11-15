function Node (data) {
    this.data = data;
    this.next = null;
}

function linkedList () {
    this.head = null;
    this.size = 0;
}

linkedList.prototype.isEmpty = function () {
    return this.size == 0;
}

linkedList.prototype.insert = function (value) {
    if (this.head === null) {
        var node = new Node (value);
        this.head = node;
    } else {
        var node = new Node (value)
        var headRef = this.head;
        while (headRef.next != null) {
            headRef = headRef.next;
        }
        headRef.next = node;
    } 
    this.size++;
}

linkedList.prototype.delete = function () {
    if (this.head === null) {
        return this.head;
    } else {
        var headRef = this.head;
        console.log (headRef);
        console.log (this.head);
        while (headRef.next.next != null) {
            console.log (headRef.data);
            headRef = headRef.next;
            
        }
        console.log (headRef.data);
        headRef.next = null;
    }
    this.size--;
}

var link = new linkedList ();
link.insert (1);
link.insert ("Cat");
link.insert (5);
console.log (link);
link.delete ();
console.log (link);