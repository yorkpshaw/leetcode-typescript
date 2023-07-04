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
