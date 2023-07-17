function containsDuplicate(nums: number[]): boolean {
    const numCount = {};

    for (const num of nums) {
        if (numCount[num]) {
        return true; // Duplicate found
        } else {
        numCount[num] = 1;
        }
    }

    return false;
    // const s = new Set(nums); return s.size !== nums.length

};

/*
Create an object to store duplicate entries in
if numCount[num/i] is in there, return true
Otherwise it is now in the dictionary with value set at 1
Or can create a set and check if the set and original input are same length
*/
