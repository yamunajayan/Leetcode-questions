/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // Three step solution

    if (!head || !head.next) return;

    //First Find the middle node

    let slow=head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //Reverese the second half of the list
    let prev = null, current=slow.next;
    slow.next = null;

    while (current) {
        let newTemp = current.next;
        current.next = prev;
        prev = current
        current = newTemp
    }

    // Join two halfs

    let first=head, second=prev;

    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1
        second = temp2;
        first = temp1

    }

    return head;
};