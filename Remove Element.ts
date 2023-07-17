/* https://leetcode.com/problems/remove-element/ */

function removeElement(nums: number[], val: number): number {

    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;

};

/*
Iterate through the array and return the number of times an element in the array does not equal val
Return value will be a number
If the element we are checking does not equal val, we increment a counting variable, number type
The counting variable also serves as a slower pointer...
If the current element equals val, nothing happens
But if it doesn't equal val, then nums[count] is set to val. That pointer only moves when we find a number that is not a match
*/
