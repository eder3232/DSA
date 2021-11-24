// function findLongestSubstring(str = '') {
//   let copy = str
//   let arr = copy.split('')
//   let start = 0
//   let end = 0
//   let subArr = []
//   let long = 0
//   while (start < arr.length) {
//     if (new Set(subArr).size === subArr.length && end < arr.length) {
//       // si no se repite ningun elemento
//       long = Math.max(long, subArr.length)
//       subArr.push(arr[end])
//       end++
//     }
//     //se repite un elemento
//     else if (new Set(subArr).size < subArr.length) {
//       subArr.shift()
//       start++
//     } else {
//       long = Math.max(long, subArr.length)
//       break
//     }
//   }
//   return long
// }

// let pruebas0 = ''
// let pruebas1 = 'rithmschool'
// let pruebas2 = 'thisisawesome'
// let pruebas3 = 'thecatinthehat'
// let pruebas4 = 'bbbbb'
// let pruebas5 = 'longestsubstring'
// let pruebas6 = 'thisisshowwedoit'
// console.log(findLongestSubstring(pruebas6))

function findLongestSubstring2(str = '') {
  let longest = 0
  let seen = {}
  let start = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

let pruebas0 = ''
let pruebas1 = 'rithmschool'
let pruebas2 = 'thisisawesome'
let pruebas3 = 'thecatinthehat'
let pruebas4 = 'bbbbb'
let pruebas5 = 'longestsubstring'
let pruebas6 = 'thisisshowwedoit'

console.log(findLongestSubstring2(pruebas4))
