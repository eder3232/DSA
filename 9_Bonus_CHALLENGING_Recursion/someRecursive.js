function someRecursive(arr = [], callback) {
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

const isOdd = (val) => val % 2 !== 0
console.log(someRecursive([2, 4, 6, 8, 9], isOdd))
