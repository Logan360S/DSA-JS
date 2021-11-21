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
    if (this.IsEmpty() === true) {
        //var node = new Node (data);
        this.head = node;
    } else {
        var headTemp = this.head;
        while (headTemp.next != null) {
            headTemp = headTemp.next; 
        }
        headTemp.next = node;
    }

    this.size ++;
}

LinkedList.prototype.Delete = function () {
    if (this.IsEmpty() === true) {
        console.log ("No data to delete");
    } else {
        var headTemp = this.head;
        while (headTemp.next.next != null) {
            headTemp = headTemp.next;
        }
        headTemp.next = null;
        this.size --;
    }
  
}

LinkedList.prototype.Search = function (searchVar) {
    if (this.IsEmpty() === true) {
        return false;
    } else {
        var headTemp = this.head;
        while (headTemp.data != searchVar && headTemp.next != null) {
            headTemp = headTemp.next
        }
        if (headTemp.data === searchVar) {
            return true;
        } else {
            return false;
        }
    }
}

LinkedList.prototype.DeleteData = function (searchVar) {
    if (this.Search (searchVar) === true) {
        var headTemp = this.head;
        if (headTemp.data === searchVar) {
            this.head = this.head.next;
            this.size --;
            return; 
        }

        while (headTemp.next.data != searchVar) {
            headTemp = headTemp.next;
        }

        var nextTemp = headTemp.next.next;
        headTemp.next = nextTemp;
        this.size --;
    }
}

var linkedList = new LinkedList ();
// linkedList.Delete ();
linkedList.Add (5);
linkedList.Add ("Hello");
linkedList.Add (52);
// linkedList.Delete ();
console.log (linkedList);

console.log (linkedList.Search (52));
linkedList.DeleteData (82);
console.log (linkedList);