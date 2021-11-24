function maxSubarraySum(arr, num) {
  let sum = []
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    tempSum += arr[i]
  }
  sum.push(tempSum)
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    sum.push(tempSum)
  }
  return Math.max(...sum)
}

let pruebas = [100, 200, 300, 400]

console.log(maxSubarraySum(pruebas, 2))
