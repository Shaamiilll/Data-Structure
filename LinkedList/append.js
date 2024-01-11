class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    delete(value) {
        if (!this.head) {
            return; // Empty list
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev.next = current.next;
            this.size--;
        }
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(50);
list.append(90);

console.log("Original List:");
list.print();

list.delete(20); // Deleting node with value 20

console.log("\nList after deleting node with value 20:");
list.print();


