function isSubsequence(inSubStr = '', inStr = '') {
  let subArr = inSubStr.split('')
  let arr = inStr.split('')
  let indices = []
  for (let i = 0; i < subArr.length; i++) {
    if (!arr.includes(subArr[i])) {
      return false
      arr.splice(i, 1)
      console.log(arr)
    } else {
      indices.push(i)
    }
  }
  let indicesCopy = indices
  let indicesSorted = indicesCopy.sort((a, b) => {
    a - b
  })
  if (indices !== indicesSorted) return false
  return true
}

console.log(isSubsequence('eder', 'melissa'))
