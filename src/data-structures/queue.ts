export class Queue<T> {
  private _values: T[];

  constructor (init: T[] = []) {
    this._values = init
  }

  enqueue (val: T) {
    this._values.push(val)
  }

  dequeue () {
    return this._values.shift()
  }

  peek () {
    return this._values[0]
  }

  clear () {
    this._values.length = 0
  }

  empty () {
    return this._values.length === 0
  }

  search (q: T) {
    return this._values.includes(q)
  }

  get size () {
    return this._values.length
  }

  /**
   * Make queue iterable
   */
  * [Symbol.iterator] () {
    for (let i = 0; i < this._values.length; i++) {
      yield [i, this._values[i]]
    }
  }

  toString() {
    return JSON.stringify(this._values);
  }

  toArray() {
    return this._values;
  }
}
