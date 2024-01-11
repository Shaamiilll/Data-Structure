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
        if (!this.head) {
            console.log("Linked list is empty.");
            return;
        }

        let sum = 0;
        let current = this.head;

        while (current) {
            console.log(current.data );
            sum += current.data;
            current = current.next;
        }
        console.log("null");
        console.log("Sum: " + sum);
    }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.display();
