class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNodeAtEnd(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    addNodeAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteNodeWithValue(value) {
        if (!this.head) {
            return;
        }

        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    insertNodeAfter(existingValue, newValue) {
        let current = this.head;
        while (current && current.data !== existingValue) {
            current = current.next;
        }

        if (current) {
            const newNode = new Node(newValue);
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printReverse() {
        const stack = [];
        let current = this.head;

        while (current) {
            stack.push(current.data);
            current = current.next;
        }

        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }

    removeDuplicatesFromSorted() {
        let current = this.head;

        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
}

// Sample Usage
const list = new LinkedList();
list.addNodeAtEnd(1);
list.addNodeAtEnd(2);
list.addNodeAtEnd(2);
list.addNodeAtEnd(3);
list.addNodeAtEnd(3);
list.addNodeAtEnd(4);
list.addNodeAtEnd(5);

console.log("Original List:");
list.printList();

console.log("\nList After Removing Duplicates:");
list.removeDuplicatesFromSorted();
list.printList();
