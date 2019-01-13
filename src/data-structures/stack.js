// @ts-check

export class Stack {
  /**
   * @param {any[]|undefined} init
   */
  constructor (init = []) {
    /** @type {any[]} */
    this.__stack = init
  }

  /**
   * Make stack iterable
   */
  * [Symbol.iterator] () {
    for (let i = 0; i < this.__stack.length; i++) {
      yield [i, this.__stack[i]]
    }
  }

  get size () {
    return this.__stack.length
  }

  /**
   * @param {any} val
   */
  push (val) {
    this.__stack.push(val)
  }

  pop () {
    return this.__stack.pop()
  }

  peek () {
    return this.__stack[this.__stack.length - 1]
  }

  empty () {
    return this.__stack.length === 0
  }

  clear () {
    this.__stack.length = 0
  }

  /**
   * @param {any} q
   */
  search (q) {
    return this.__stack.includes(q)
  }
}

/*
let a = new Stack([1,2,3,4,5,6])

a.pop()
a.peek() // 5
a.push(6)
a.search(5) // true
a.empty() // false
a.size // 6

for (let [i, val] of a) {

}

a.clear() // clears the stack
*/
