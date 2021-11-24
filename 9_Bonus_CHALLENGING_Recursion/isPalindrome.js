function isPalindrome(arr = '') {
  let copy = arr
  function reverse(str) {
    if (str.length === 0) return ''
    return str[str.length - 1] + reverse(str.slice(0, -1))
  }

  if (reverse(arr) === copy) {
    return true
  } else {
    return false
  }
}
