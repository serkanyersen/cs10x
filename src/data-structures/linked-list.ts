type Maybe<T> = T | null

class LinkedNode<T> {

  value: T;
  next: Maybe<LinkedNode<T>>;

  constructor (value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  public head: Maybe<LinkedNode<T>> = null;

  append(value: T) {

    if (this.head === null) {
      this.head = new LinkedNode(value);
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = new LinkedNode(value);
  }

  prepend(value: T) {
    const newHead = new LinkedNode(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  deleteWithValue (value: T) {
    if (this.head === null) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  /**
   * Make queue iterable
   */
  * [Symbol.iterator] () {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      yield [index, current.value]
      index += 1;
      current = current.next;
    }
  }
}
