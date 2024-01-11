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

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Function to convert array to linked list
function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (const element of arr) {
        linkedList.append(element);
    }
    return linkedList;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
const myLinkedList = arrayToLinkedList(myArray);

console.log("Linked List from Array:");
myLinkedList.print(); // Corrected the function call
