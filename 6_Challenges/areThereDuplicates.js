//Frequency Counter

function areThereDuplicates(...arr) {
  if (arr.length == 0) return false
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
    if (obj[arr[i]] > 1) return true
  }
  return false
}
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6))
console.clear()
//Multiple pointers

function areThereDuplicates2(...args) {
  let copy = [...args]
  let sorted = copy.sort((a, b) => {
    return a - b
  })
  let start = 0
  let next = 1
  console.log(copy)
  console.log(sorted)
  while (next < args.length) {
    if (sorted[start] === sorted[next]) return true
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates2(42, 2, 3, 4, 4, 5))

function areThereDuplicates3(...args) {
  let copy = args
  return new Set(copy).size !== copy.length
}
console.log('duplicates3')

console.log(areThereDuplicates3(2, 3, 7, 4, 5))
