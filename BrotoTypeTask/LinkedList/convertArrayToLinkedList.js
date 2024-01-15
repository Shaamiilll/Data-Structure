class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insert(value){
        const node = new Node(value);
        if(this.head== null){
            this.head = node
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
    }

    print(){
        if(this.head == null){
            console.log("no Values");
        }else{
            let current = this.head
            while(current.next){
                console.log(current.data);
                current = current.next
            }
        }
    }

}

function arrayToLinkedList(arr){
let linkedList = new LinkedList()

    for(let i=0;i<arr.length;i++){
        linkedList.insert(arr[i])
    }
    return linkedList
}

const myArray = [1,2,3,5,6,4,3,4,6]
 linkedList = arrayToLinkedList(myArray)
linkedList.print()
