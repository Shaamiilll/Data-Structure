class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentlength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentlength === this.capacity;
  }

  isEmpty() {
    return this.currentlength === 0;
  }

  enqueue(){
    
  }
}
