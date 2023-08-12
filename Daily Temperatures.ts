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
Loop through array, and another conditional loop inside (While the stack is not empty, and if current temp is greater than temp from stack)
*/
