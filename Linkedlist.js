function LinkedList () {
    var length = 0;
    var head = null;

    var Node = function (elem) {
        this.element = elem;
        this.next = null;
    }

    this.add = function (elem) {
        var node = new Node (elem);

        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

    };
}

var newLink = new LinkedList ();
newLink.add (5);
newLink.add ("cat");
newLink.add ("hat");
newLink.add (26);

console.log (newLink);