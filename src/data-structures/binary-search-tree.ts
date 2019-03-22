type Maybe<T> = T | null

export class BinaryNode<T> {
  value: T;
  left: Maybe<BinaryNode<T>>;
  right: Maybe<BinaryNode<T>>;

  constructor (value: T) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert (value: T) {
    if (value > this.value) {
      if (this.right !== null) {
        this.right.insert(value)
      } else {
        this.right = new BinaryNode(value)
      }
    } else {
      if (this.left !== null) {
        this.left.insert(value)
      } else {
        this.left = new BinaryNode(value)
      }
    }
  }

  find (value: T): boolean {
    if (value === this.value) {
      return true
    } else if (value > this.value && this.right !== null) {
      return this.right.find(value)
    } else if (value < this.value && this.left !== null) {
      return this.left.find(value)
    }

    return false
  }
}
