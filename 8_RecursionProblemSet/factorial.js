function factorial(n = 0) {
  if (n < 0) return 0
  if (n === 0) return 1
  if (n === 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(12))
