function largestSubarraySum(array) {
  let maxSum = 0
  for (let i = 0; i < array.length; i++) {
    let sumFixedStart = 0
    for (let j = i; j < array.length; j++) {
      sumFixedStart += array[j]
      maxSum = Math.max(maxSum, sumFixedStart)
    }
  }
  return maxSum
}