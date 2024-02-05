class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node at the end of the doubly linked list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Add a node at the beginning of the doubly linked list
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    // Print the doubly linked list in forward direction
    printForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Print the doubly linked list in backward direction
    printBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    // Get the size of the doubly linked list
    getSize() {
        return this.size;
    }
}

// Example Usage:
const doublyList = new DoublyLinkedList();

doublyList.append(10);
doublyList.append(20);
doublyList.append(30);
doublyList.prepend(5);

console.log("Forward:");
doublyList.printForward();

console.log("\nBackward:");
doublyList.printBackward();

console.log("\nSize:", doublyList.getSize());