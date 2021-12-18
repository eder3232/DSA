class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head || this.length === 0) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (this.length === 0) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null

    if (index <= this.length / 2) {
      let currrentNode = this.head
      let count = 0
      while (index !== count) {
        currrentNode = currrentNode.next
        count++
      }
      return currrentNode
    } else {
      let currrentNode = this.tail
      let count = this.length - 1
      while (index !== count) {
        currrentNode = currrentNode.prev
        count--
      }
      return currrentNode
    }
  }
  set(index, val) {
    let foundNode = this.get(index)
    if (index != null) {
      foundNode.val = val
      return true
    }
    return false
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length - 1) return !!this.push(val)

    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode

    newNode.next = afterNode
    afterNode.prev = newNode

    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    let removedNode = this.get(index)
    let beforeNode = removedNode.prev
    let afterNode = removedNode.next
    afterNode.prev = beforeNode
    beforeNode.next = afterNode

    removedNode.prev = null
    removedNode.next = null
    this.length--
    return removedNode
  }
}

let list = new DoubleLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
console.log(list)
console.clear()
console.log(list.remove(5))

// console.log(list)
