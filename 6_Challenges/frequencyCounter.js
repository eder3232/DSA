function sameFrequency(num1, num2) {
  arr1 = num1
    .toString()
    .split('')
    .map((num) => Number(num))
  arr2 = num2
    .toString()
    .split('')
    .map((num) => Number(num))
  if (arr1.length !== arr2.length) return false
  obj1 = {}
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1
  }
  obj2 = {}
  for (let i = 0; i < arr2.length; i++) {
    obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1
  }

  for (key in obj1) {
    console.log(obj1[key])
    console.log(obj2[key])
    if (!obj2[key]) return false
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}
num1 = 182
num2 = 281
console.log(sameFrequency(num1, num2))
