function reverse(str) {
  if (str.length === 0) return ''
  return str[str.length - 1] + reverse(str.slice(0, -1))
}

let nina = 'sergio'

console.log(reverse(nina))
console.log(nina[0])
console.log(nina.length)

// console.log(nina.substring(0, nina.length - 1))
