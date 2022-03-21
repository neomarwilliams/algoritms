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

    display() {
        var copySLL = new SLL();
        copySLL = this;
        console.log(copySLL);
        let myListVals = []
        let runner = copySLL.head
        while(runner !== null) {
            let headVal = copySLL.returnValueFromFront()
            myListVals.push(headVal)
            runner = runner.next
            copySLL.removeNodeFromFront()
            
        }
        console.log(myListVals)
        myListVals = myListVals.toString()
        console.log(myListVals)
        return myListVals
    }
}

var testSLL = new SLL();
testSLL.addNodeToFront(2);
testSLL.addNodeToFront(14);
// testSLL.addNodeToFront(5);
// testSLL.addNodeToFront(86);
testSLL.display();