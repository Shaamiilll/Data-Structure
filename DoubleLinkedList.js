class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
        this.prevNode = null; // New reference to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            newNode.prevNode = currentNode; // Set the previous node reference
            currentNode.nextNode = newNode;
        }
    }

    display() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log((currentNode.prevNode ? currentNode.prevNode.data : "null") + " <- " +
                currentNode.data + " -> " +
                (currentNode.nextNode ? currentNode.nextNode.data : "null"));
            currentNode = currentNode.nextNode;
        }
        console.log("null");
    }
}

// Example usage:
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

doublyLinkedList.display();
