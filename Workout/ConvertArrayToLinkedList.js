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

    append(data) {
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

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

// Function to convert array to linked list
function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (let i = 0; i < arr.length; i++) {
        linkedList.append(arr[i]);
    }
    return linkedList;
}

// Example usage:
const myArray = [1, 2, 3, 4, 0];
const linkedList = arrayToLinkedList(myArray);

linkedList.display();
