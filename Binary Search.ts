/* https://leetcode.com/problems/binary-search */

function search(nums: number[], target: number): number {

    let left: number = 0;
    let right: number = nums.length - 1;
    while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
        if (nums[mid] === target) { // ! if mid val is equal to target we will return the mid
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;

};

/*
Set a left and right pointer (beginning, end) outside of the loop
Inside of the loop, define the mid-point (which may change)
Mid-point is floor(left+right/2
Left and right will change based on search/target value)
*/
