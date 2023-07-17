/* https://leetcode.com/problems/reorder-list/ */

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

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head: ListNode | null): void {

    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let headTwo = slow.next;
    slow.next = null;

    let previousPointer = null;
    let currentPointer = headTwo
    while (currentPointer !== null) {
        let temp = currentPointer.next;
        currentPointer.next = previousPointer;
        previousPointer = currentPointer;
        currentPointer = temp;
    }

    let v1 = head;
    let headOne = head;
    let v2 = previousPointer;
    headTwo = previousPointer;
    while (headTwo !== null) {
        headOne = headOne.next;
        v1.next = headTwo;
        headTwo = headTwo.next
        v2.next = headOne;
        v1 = headOne;
        v2 = headTwo;
    }
};
