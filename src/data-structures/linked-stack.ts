import { Stack } from "./stack";
import { LinkedList, LinkedNode } from "./linked-list";
import { Maybe } from "../utils";

class LinkedStack<T> {
  private list = new LinkedList();
  private tail = this.list.head;

  private _size = 0;

  constructor() {}

  * [Symbol.iterator] () {
    yield
  }

  get size () {
    return this._size;
  }

  push (val: T) {
    if (this.tail === null) {
      this.list.append(val);
      if (this.list.head !== null) {
        this.tail = this.list.head.next;
      }
    } else {
      this.tail.next = new LinkedNode(val);
      this.tail = this.tail.next;
    }

    this._size++;
  }

  pop () {

  }

  peek () {

  }

  empty () {

  }

  clear () {

  }

  search (q: T) {

  }

  toArray() {

  }

  toString() {

  }
}
