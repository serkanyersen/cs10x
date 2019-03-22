export class Stack<T> {
  private _values: T[];

  constructor (init: T[] = []) {
    this._values = init
  }

  /**
   * Make stack iterable
   */
  * [Symbol.iterator] () {
    for (let i = 0; i < this._values.length; i++) {
      yield [i, this._values[i]]
    }
  }

  get size () {
    return this._values.length
  }

  push (val: T) {
    this._values.push(val)
  }

  pop () {
    return this._values.pop()
  }

  peek () {
    return this._values[this._values.length - 1]
  }

  empty () {
    return this._values.length === 0
  }

  clear () {
    this._values.length = 0
  }

  search (q: T) {
    return this._values.includes(q)
  }

  toString () {
    return JSON.stringify(this._values);
  }

  toArray () {
    return this._values;
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
