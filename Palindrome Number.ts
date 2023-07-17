function isPalindrome(x: number): boolean {
    let reverseX: number
    const tempReverseString = x.toString().split("").reverse().join('')
    reverseX = parseInt(tempReverseString)

    return reverseX === x
};


/*
Declare a reversed number variable to compare to the input, and declare it as a number type
    Declare tempReverseString variable to be the input number. Convert to string, split into array, reverse, and join
    parseInt the temp variable to turn the string back into an integer
Return the comparison between reversed number and input number
*/
