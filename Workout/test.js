class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }


    insert(value){
        const node = new Node(value)
        if(this.head == null){
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
            console.log("there is no values");
        }else{
            let current = this.head
            while(current.next){
                console.log(current.value);
                current = current.next
            }

        }
    }
}


const list = new LinkedList()

list.insert(10)
list.insert(12)
list.insert(14)
list.insert(15)

list.print()

