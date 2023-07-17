/* https://leetcode.com/problems/swap-nodes-in-pairs/ */


//  * Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function swapPairs(head: ListNode | null): ListNode | null {

    if (!head || !head.next) return head;

    const currHead = head.next;
    head.next = swapPairs(currHead.next);
    currHead.next = head;

    return currHead;
};

/*
Base case: If there is no head, or no head.next, then return head
Set the second node to be the currHead
Recursively call swapPairs on the 3rd node, which will change the head input on subsequent calls and swap pairs
    On the next call, head takes the value of currHead which is the 3rd node
    const currHead = head.next which is the 4th node, so currHead is now node 4
    Recursive call #2: head.next(node 4) recursively calls swapPairs(currHead.next) which is swapPairs(node 4)
    Recursive call #3: head is now node 4
        There is no head.next, hit base case so return head
Set currHead.next(2nd node) to be head (1st node)





*/
