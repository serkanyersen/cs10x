type Maybe<T> = T | null

export class BinaryTree<T> {
  value: T;
  left: Maybe<BinaryTree<T>>;
  right: Maybe<BinaryTree<T>>;

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
        this.right = new BinaryTree(value)
      }
    } else {
      if (this.left !== null) {
        this.left.insert(value)
      } else {
        this.left = new BinaryTree(value)
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
