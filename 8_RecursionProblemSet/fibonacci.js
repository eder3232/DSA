function fib(num) {
  if (num < 0) return 0 // early return
  if (num === 0) return 0 // caso base 1
  if (num === 1) return 1 // caso base 2
  return fib(num - 1) + fib(num - 2)
}
let melissa = 4
console.log(fib(melissa))
