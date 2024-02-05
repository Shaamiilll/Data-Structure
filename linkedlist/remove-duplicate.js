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
  
    insert(data) {
      const newNode = new Node(data);
      if (!this.head || data < this.head.data) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next && data > current.next.data) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    removeDuplicates() {
      let current = this.head;
      while (current && current.next) {
        if (current.data === current.next.data) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  linkedList.insert(1);
  linkedList.insert(2);
  linkedList.insert(2);
  linkedList.insert(3);
  linkedList.insert(4);
  linkedList.insert(4);
  linkedList.insert(5);
  
  console.log("Original linked list:");
  linkedList.display();
  
  linkedList.removeDuplicates();
  
  console.log("\nLinked list after removing duplicates:");
  linkedList.display();
  