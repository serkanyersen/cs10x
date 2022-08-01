export class MinHeap {
  get size() {
    return this.items.length - 1;
  }

  items: number[] = [];

  private getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }
  private getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }
  private getParentIndex(childIndex: number) {
    return Math.ceil((childIndex - 2) / 2);
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.size;
  }
  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.size;
  }
  private hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number) {
    return this.items[this.getLeftChildIndex(index)];
  }
  private rightChild(index: number) {
    return this.items[this.getRightChildIndex(index)];
  }
  private getParent(index: number) {
    return this.items[this.getParentIndex(index)];
  }

  private swap(indexOne: number, indexTwo: number) {
    [this.items[indexOne], this.items[indexTwo]] = [
      this.items[indexTwo],
      this.items[indexOne],
    ];
  }

  peek() {
    return this.items[0];
  }

  poll() {
    if (this.size === 0) throw new RangeError();
    const item = this.items[0];
    this.items[0] = this.items.pop() as number;
    this.heapDown();
    return item;
  }

  add(item: number) {
    this.items.push(item);
    this.heapUp();
  }

  private heapUp() {
    let index = this.size;

    while (this.hasParent(index) && this.getParent(index) > this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  private heapDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] < this.items[smallerIndex]) {
        break;
      } else {
        this.swap(index, smallerIndex);
      }
      index = smallerIndex;
    }
  }
}
