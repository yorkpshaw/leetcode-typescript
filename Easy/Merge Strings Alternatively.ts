function mergeAlternately(word1: string, word2: string): string {

    let i: number = 0;
    let j: number = 0;
    let result: string = '';

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i];
            i++;
        }
        if (j < word2.length) {
            result += word2[j];
            j++;
        }
    }

    return result
};
