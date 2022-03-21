class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Adds new node to front of the SLL object
    addNodeToFront(val) {
        var newNode = new SLLNode(val);
        newNode.next = this.head;
        this.head = newNode;

        return this.head
    }

    // Removes head node from front of SLL object
    removeNodeFromFront() {

        if (this.head == null) {
            return null
        }

        var nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        nodeToRemove.next = null;
        console.log(this.head);

        return this.head;
    }

    returnValueFromFront() {
        if(this.head == null) {
            console.log(this.head)
            return null
        }
        else {
            console.log(this.head.value)
            return this.head.value
        }
    }
}

// test cases
// // SLL test cases .addNode
var testSLL = new SLL();
// testSLL.addNodeToFront(2);
// testSLL.addNodeToFront(14);
// testSLL.addNodeToFront(5);
// testSLL.addNodeToFront(86);
// console.log(testSLL);

// // SLL test cases .removeNode
// testSLL.removeNodeFromFront();
// testSLL.removeNodeFromFront();
// testSLL.removeNodeFromFront();
// testSLL.removeNodeFromFront();
// testSLL.removeNodeFromFront();

// SLL test cases .
testSLL.returnValueFromFront();
testSLL.addNodeToFront(12);
testSLL.returnValueFromFront();
testSLL.addNodeToFront(3);
testSLL.addNodeToFront(78);
testSLL.returnValueFromFront();
testSLL.removeNodeFromFront();
testSLL.returnValueFromFront();