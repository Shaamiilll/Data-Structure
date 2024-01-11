// Remove Nth Node From End of List


const head = [1,2,3,4,5]
var reverseList = function(head) {
    let prev = null;
    let curr = head;
   while (curr !== null) {
     let next = curr.next;
     curr.next = prev;
     prev = curr;
     curr = next;
   }
   
   return prev;  
 };

 