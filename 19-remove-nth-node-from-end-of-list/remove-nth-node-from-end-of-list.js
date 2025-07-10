/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //First find length of the list
    let count;

    if(!head) return;

    if (head) count = 1;

    let tail = head;

    while (tail.next) {
        count++;
        tail = tail.next;
    }

    if (count<n) return;
    if (n === count) return head.next;

    let dummy = head;

    for(let i=1; i<count-n; i++) {
        dummy = dummy.next
    }

    if (dummy.next) {
        dummy.next = dummy.next.next;
    } else {
        dummy.next = null;
    }

    return head
   
};