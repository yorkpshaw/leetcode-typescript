/* https://leetcode.com/problems/add-two-numbers/ */

/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Adds two numbers represented as linked lists.
 * @param l1 The first linked list.
 * @param l2 The second linked list.
 * @returns The sum of the two linked lists as a new linked list.
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    const result = new ListNode();
    let dummy = result; // Will reference the same object in memory

    while (l1 || l2 || carry) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;

        const nextDigit = (l1Val + l2Val + carry) % 10;
        dummy.next = new ListNode(nextDigit);
        dummy = dummy.next;

        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;
}

// Example usage:
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const sum = addTwoNumbers(l1, l2); // Returns ListNode representing 7 -> 0 -> 8 (which is 342 + 465 = 807)

/*
Initialize carry variable outside of loop. If put inside the loop it'll always be that number by default
Declare result variable as a new List (I guess the value passed in doesn't matter?)
have a dummy list that points to that result List, to build out the rest of the list
If we do manual addition, 243
                         +564=
                          708
                           +1
Result will be already reversed if you do reverse addition
Initialize a carry variable to add 1 to next number if two numbers >= 10
While there is l1, l2, and carry...
    If there is a node present in l1, set a variable to be equal to the value of that node
    Do the same for l2
    If there is nothing present in either, set it to 0 (to be declared null at the end of the loop)
Declare a variable to find whatever the next node/digit's value is going to be
    (l1.val + l2.val + carry) % 10 --- if the operation returns over 10 (like 8+9=17) it returns 7 like 3+4
    set the dummy.next node to have the value of nextDigit
    move the dummy pointer over to the next node

    if l1/l2 was present this loop, then declare its value to be l1/l2.next
    if it was not present, declare it null and it will stay 0 for the rest of the function

    return result.next and not dummy.next because dummy.next will always point to null, as that was responsible for building the rest of the nodes
*/
