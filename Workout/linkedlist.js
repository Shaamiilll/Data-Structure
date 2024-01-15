
  function removeElements(head, val) {
    if(!head) return null
    let cur = head.next
    
    prev = head
    while(cur){
        if(cur.val === val){
            cur = cur.next
            prev.next = cur
        }else{
            prev = cur
            cur = cur.next
        }
    }
    if(head.val === val )return head.next
    return head
  }
  
 const head = [1,2,6,3,4,5,6], val = 6

  
  console.log(removeElements(head, val));
  