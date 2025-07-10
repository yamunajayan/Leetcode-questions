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
    let dummy = new ListNode();
    dummy.next = head;

    let first=dummy, second=dummy;

    //Move n+1 places for first 
    for(let i=0; i<=n; i++) {
        first = first.next;
    }

    //Move first till it hits null
    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;
    return dummy.next;   
};