/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists || lists.length===0) return null

    while (lists.length >1) {
        let mergedLists = [];

        for(let i=0; i<lists.length; i+=2) {
            l1 = lists[i];
            l2 = (i + 1 < lists.length) ? lists[i+1] : null;
            mergedLists.push(mergeLinkedList(l1, l2));
        }

        lists = mergedLists;
    }

    return lists[0]   
};

var mergeLinkedList = function(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            tail.next = list1
            list1 = list1.next

        } else {
            tail.next = list2;
            list2 = list2.next
        }
        tail = tail.next;
    }

    if (list1) tail.next = list1;
    if (list2) tail.next = list2;

    return dummy.next;
}