class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined
        //nodos del lado izquierdo
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false
    let current = this.root
    let found = false
    while (!found && current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else if (value === current.value) {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
}

let bts = new BinarySearchTree()
bts.insert(10)
bts.insert(5)
bts.insert(13)
bts.insert(11)
bts.insert(12)
bts.insert(16)
bts.insert(7)

console.log(bts)
