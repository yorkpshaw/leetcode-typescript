function twoSum(nums: number[], target: number): number[] | undefined {
    let mp = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (mp.has(diff)) {
            return [i, mp.get(diff)!];
        }
        mp.set(nums[i], i);
    }

    return undefined;
}
/*
Declare new Map variable - set the key and value to be numbers
Loop through the list...
    The difference is target sum minus current element nums[i]
    If the list has this difference in it (stored as a key)
        Return i(current index) and the difference's value (also an index)
    If the difference is not in the list,
        Then set nums[i] and i to be the key-value pair
Return undefined as the result to give if we have nothing
*/
