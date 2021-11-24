function productOfArray(arr = []) {
  if (arr.length === 0) return 1
  let num = arr.pop()
  return num * productOfArray(arr)
}
let pruebas = [1, 2, 3, 4]
console.log(productOfArray(pruebas))
