class Node {
    constructor() {
      this.data = null;
      this.next = null;
    }
  }
   
  class NodeOperation {
    // Function to add a new node
    pushNode(headRef, dataVal) {
      // Allocate node
      const newNode = new Node();
      // Put in the data
      newNode.data = dataVal;
      // Link the old list of the new node
      newNode.next = headRef[0];
      // move the head to point to the new node
      headRef[0] = newNode;
    }
  }
   
  // Driver code
  const head = [null];
  const temp = new NodeOperation();
  for (let i = 5; i > 0; i--) {
    temp.pushNode(head, i);
  }
  const v = [];
  let curr = head[0];
  while (curr !== null) {
    v.push(curr.data);
    curr = curr.next;
  }
  
  var middle = Math.floor(v.length / 2);
  console.log("Middle Value Of Linked List is : " + v[middle]);