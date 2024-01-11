class Node{
    constructor(value){
        this.value= value
        this.next = null
    }
}

class linkedList{
    constructor(value){
        this.head = null
        this.size = null
    }

    getSize(){
        return this.size
    }

    isEmpty(){
       return this.size === 0
    }


    prepend(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr = this.head
            let listValues = ''

            while(curr){
                console.log(curr.value);
                listValues += `${curr.value} `
                curr = curr.next
            }

            console.log(listValues);
        }
    }
}


const list = new linkedList()


list.append(10)

list.append(20)
list.append(50)
list.append(90)

list.print()

