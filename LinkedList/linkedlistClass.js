class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    
   // how to add new node start of list
   //contain a value and a pointer

   append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head = node
    }else{
        node.next = this.head
        this.head = node
    }
    this.size++
   }
}




const list = new linkedList()
list.append(1);
list.append(2);
list.append(3);

console.log("list is empty" , list.isEmpty());
console.log("list size" , list.getSize());

