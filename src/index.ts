// Write your example code
import { Trie } from './data-structures/trie'
import { BinaryTree } from './data-structures/binary-search-tree';
import { Stack } from './data-structures/stack';
import { Queue } from './data-structures/queue';
import { LinkedList } from './data-structures/linked-list';
import { MinHeap } from './data-structures/min-heap';
import { inOrder, preOrder, levelOrder, postOrder, outOrder } from './algorithms/traversal';
import { label } from './utils';

label('Trie')

const t = new Trie()

t.insert('serkan')
t.insert('sercan')
t.insert('seyhun')

console.log('find ser*: ', t.find('ser'))

label('Binary Tree');
const head = new BinaryTree<number>(10);
head.insert(8)
head.insert(22)
head.insert(7)
head.insert(9)
head.insert(19)
head.insert(24)

console.log(`
       10
      /   \\
     8     22
    / \\   /  \\
   7   9  19  24
`)

const sorted: number[] = [];
inOrder(head, (node) => {
  sorted.push(node.value);
})
console.log('Binary Tree Sorted (in order)', sorted);

const sorted2: number[] = [];
outOrder(head, (node) => {
  sorted2.push(node.value);
})
console.log('Binary Tree Sorted (out order)', sorted2);

const preorder: number[] = [];
preOrder(head, (node) => {
  preorder.push(node.value);
})
console.log('Pre Order', preorder);

const postorder: number[] = [];
postOrder(head, (node) => {
  postorder.push(node.value);
})
console.log('Post Order', postorder);

const levelorder: number[] = [];
levelOrder(head, (node) => {
  levelorder.push(node.value);
})
console.log('Level Order', levelorder);

label('Stack')
const stack = new Stack<number>();

stack.push(5)
stack.push(6)
stack.push(7)
console.log(`stack ${stack}`)
console.log('peek', stack.peek())

label('Queue')
const q = new Queue<number>();

q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
console.log(`queue ${q}`)
console.log('peek', q.peek())

label('Linked List')
const list = new LinkedList<number>();

list.append(5)
list.append(6)
list.append(7)
list.append(8)
console.log('linked list: ', list)

for (let [i, value] of list) {
  console.log('%s => %s', i, value);
}

label('Min Heap')
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
