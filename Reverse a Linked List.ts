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
    let current = head // Current points to head, 1 -> 2 -> 3 -> 4 -> 5 -> null
    while(current !== null) {
        next = current.next; // Setting next to start at 2nd node in current
                             // 2 -> 3 -> 4 -> 5
        current.next = prev; // 2nd node in current is now prev. 2 -> 3 -> 4-> 5 -> null 3 is now = null
        prev = current; // 1 -> null
        current = next; // 2 -> 3 -> 4 -> 5 -> null, this is changing for each subsequent iteration
    }
        return prev; // 5 -> 4 -> 3 -> 2 -> 1 -> null
    };




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
