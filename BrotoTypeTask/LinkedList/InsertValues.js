class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }

  new(value) {
    const node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      const current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    if (this.head == null) {
      console.log("this is a empty node");
    } else {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  insertFirst(value){
    const node = new Node(value)
    if(this.head == null){
        this.head = value
    }else{
        
        node.next=this.head
        this.head = node
    }
  }

  removeFirstElement(){
    if(this.head== null){
        console.log('no Elements found');
    }else{
        this.head=this.head.next
    }
  }
  removeLastElement() {
    if (this.head === null) {
      console.log("No element found.");
    } else {
      if (this.head.next === null) {
        // If there is only one element, set the head to null
        this.head = null;
      } else {
        let current = this.head;
        let previous = null;

        while (current.next) {
          previous = current;
          current = current.next;
        }

        // Update the previous node's next pointer to null
        previous.next = null;
      }
    }
  }
}

const list = new Linkedlist();

list.new(9);
list.new(10);

list.removeLastElement()


list.print();
