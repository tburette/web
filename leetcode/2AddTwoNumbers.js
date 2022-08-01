
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//bad : result must be a linked list not a number
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let mul = 1;
    while(l1 || l2){
        if(l1){
            sum += l1.val*mul;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val*mul;
            l2 = l2.next;
        }
        mul*=10;
    }
    return sum;
};

var addTwoNumbers = function(l1, l2, carry=0) {
    if(!l1 && !l2 && carry==0) return null;
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    return new ListNode(sum%10, addTwoNumbers(l1?.next, l2?.next, Math.floor(sum/10)));
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}


// test code follows

function makeLinkedList(numberArray){
    if(numberArray.length == 0) return null;
    return new ListNode(numberArray[0], makeLinkedList(numberArray.slice(1)))
}

let l1 = makeLinkedList([2, 4, 3]);
let l2 = makeLinkedList([5, 6, 4]);
console.log(addTwoNumbers(l1, l2));

console.log(addTwoNumbers(makeLinkedList([9,9,9,9,9,9,9]), makeLinkedList([9,9,9,9])));