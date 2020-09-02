function largestSubarraySum(array) {
    const rez = {
        start: 0,
        end: 0,
        sum: 0
    }
    for (let i = 0; i < array.length; i++) {
        let best = array[i];
        for (let j = i + 1; j < array.length; j++) {
            best += array[j];
            if (best > rez.sum) {
                rez.start = i;
                rez.end = j;
                rez.sum = best;
            }
        }
    }
    return rez.sum;
}