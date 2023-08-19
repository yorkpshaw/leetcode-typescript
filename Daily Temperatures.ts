/* https://leetcode.com/problems/daily-temperatures/ */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures: number[]) {

    const res: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        while (stack.length > 0 && t > temperatures[stack[stack.length - 1]]) {
            const stackInd = stack.pop()!;
            res[stackInd] = i - stackInd;
        }
        stack.push(i);
    }
    return res;


};

/*
Use a stack to hold the indices
Loop through array, and another conditional loop inside
    (While the stack is not empty, and if current temp is greater than temp from top of stack)
        pop the top of the stack which represents a held index
        held index's value = i - stackInd
Push current element into stack after while loop


 0   1   2   3   4   5   6   7
[73, 74, 75, 71, 69, 72, 76, 73]
*/
