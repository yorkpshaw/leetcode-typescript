/* https://leetcode.com/problems/merge-two-sorted-lists/submissions/ */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {


    if (list1 == null) return list2;
    if (list2 == null) return list1;

    // If l1 is lower
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If l2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;

};
};

/*
Create dummy node to build off of
Declare variable to point to node
Loop while there is a node in either list...
Compare values of l1 and l2

Set the value of next node in dummy
Move the pointer of dummy over
Update the pointer in lists
*/
