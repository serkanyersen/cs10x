type Maybe<T> = T | null

// Write your example code
import { Trie } from './data-structures/trie'
import { BinaryNode } from './data-structures/binary-search-tree';
import { Stack } from './data-structures/stack';
import { Queue } from './data-structures/queue';
import { LinkedList } from './data-structures/linked-list';
import { MinHeap } from './data-structures/min-heap';

console.log('\n' + '-'.repeat(80) + '\n') // separate each execution

const t = new Trie()

t.insert('serkan')
t.insert('sercan')
t.insert('seyhun')

console.log('find ser*: ', t.find('ser'))

const head = new BinaryNode<number>(2);
head.insert(4)
head.insert(8)
head.insert(6)
head.insert(9)
head.insert(5)
head.insert(11)
head.insert(5)

const sorted: number[] = [];
function inOrder<T>(node: Maybe<BinaryNode<T>>, visit: (node: BinaryNode<T>) => void) {
  if (node == null) return null;

  inOrder(node.left, visit);
  visit(node);
  inOrder(node.right, visit);
}

inOrder(head, (node) => {
  sorted.push(node.value);
})

console.log('Binary Tree Sorted', sorted);

const stack = new Stack<number>();

stack.push(5)
stack.push(6)
stack.push(7)
console.log(`stack ${stack}`)
console.log('peek', stack.peek())

const q = new Queue<number>();

q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
console.log(`queue ${q}`)
console.log('peek', q.peek())

const list = new LinkedList<number>();

list.append(5)
list.append(6)
list.append(7)
list.append(8)
console.log('linked list: ', list)

for (let [i, value] of list) {
  console.log('%s => %s', i, value);
}

const min = new MinHeap();

min.add(8);
console.log('minheap', min.peek());

min.add(10);
console.log('minheap', min.peek());

min.add(3);
console.log('minheap', min.peek());

console.log('poll', min.poll())
console.log('minheap', min.peek());
console.log('poll', min.poll())
console.log('minheap', min.peek());
