/* https://leetcode.com/problems/subsets/ */

function subsets(nums: number[]): number[][] {

    const result: number[][] = [[]];

    function backtrack(first: number, current: number[]) {
    for (let i = first; i < nums.length; i++) {
        current.push(nums[i]);

        result.push(current.slice());
        backtrack(i + 1, current);

        current.pop();
        }
    }

    backtrack(0, []);
    return result

};

function subsets(nums: number[]): number[][] {

    const result: number[][] = [];

    const dfs = (i: number, nums: number[], slate: number[]) => {
        // Base
        if (i === nums.length) {
            result.push(slate.slice());
            return;
        }

        // exclude
        dfs(i + 1, nums, slate);

        // include
        slate.push(nums[i]);
        dfs(i + 1, nums, slate);
        slate.pop();
    }

    dfs(0, nums, []);
    return result;

};
