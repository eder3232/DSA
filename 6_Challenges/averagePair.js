function averagePair(arr, targetAvr) {
  if (arguments.length < 2) return false
  let i = 0
  let j = arr.length - 1
  while (j - i >= 1) {
    let avr = (arr[i] + arr[j]) / 2
    if (avr === targetAvr) {
      return true
    } else if (avr < targetAvr) {
      i++
    } else {
      j--
    }
  }
  return false
}

let pruebas = [1, 3, 3, 5, 6, 7, 10, 12, 19]

console.log(averagePair(pruebas, 8))
