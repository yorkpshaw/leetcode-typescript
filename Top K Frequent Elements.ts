/* https://leetcode.com/problems/top-k-frequent-elements/ */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = {};
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    const frequencyArray: number[] = Object.values(frequencyMap);

    frequencyArray.sort((a, b) => b - a);

    const topKFrequencies: number[] = frequencyArray.slice(0, k);

    const result: number[] = [];

    for (const num in frequencyMap) {
        if (frequencyMap[num] >= topKFrequencies[topKFrequencies.length - 1]) {
            result.push(Number(num));
        }
    }

    return result;
};

/* Create an object to store the frequency of each number
Convert the object values to an array
Sort the frequency array in descending order
Get the first k elements from the sorted array
Create a result array to store the top k frequent numbers
Iterate over the original object to find numbers with top k frequencies
 */
