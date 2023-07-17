/* https://leetcode.com/problems/reverse-string/description/ */

/*
 Do not return anything, modify s in-place instead.
*/
 function reverseString(s: string[]): void {
    reverseHelper(s, 0, s.length - 1);
    }

    function reverseHelper(s: string[], start: number, end: number): void {
    if (start >= end) {
        return; 
    }

    [s[start], s[end]] = [s[end], s[start]];

    reverseHelper(s, start + 1, end - 1);
};

/* 
Write a helper recursive function that accepts three parameters: the string input, and a start and end pointer, both number types
    Inside the function...
    Base case is when both pointers meet in the middle
    Swap the characters
    Call the recursive function with start and end pointers being incremented
*/