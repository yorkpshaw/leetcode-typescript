/* https://leetcode.com/problems/reverse-linked-list/ */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {

    let prev = null
    let next = null
    let current = head
    while(current !== null) {
        next = current.next; // Save the reference to the next node in the original list
        current.next = prev; // Reverse the current node's pointer to point to the previous node
        prev = current; // Move prev pointer to the current node to add to reversed list
        current = next; // Move current pointer to the next node in the original list
    }
        return prev;
    };

/*
We are reversing a linked list by going from 1->2->3->4->5->null to 5->4->3->2->1->null
Create a pointer to 'head' to initialize building out a new list
Inside the loop, current !== null will traverse to the end of the copied linked list
*/
    // Recursive Solution
// function reverseList(head: ListNode | null): ListNode | null {
//     if (head === null || head.next === null) {
//         return head;
//     }

//     const reversedList = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return reversedList;
//     }
