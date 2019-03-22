import { BinaryTree } from "../data-structures/binary-search-tree";
import { Queue } from "../data-structures/queue";

type Maybe<T> = T | null

export function preOrder<T>(node: Maybe<BinaryTree<T>>, visit: (node: BinaryTree<T>) => void) {
  if (node == null) return null;

  visit(node);
  preOrder(node.left, visit);
  preOrder(node.right, visit);
}

export function inOrder<T>(node: Maybe<BinaryTree<T>>, visit: (node: BinaryTree<T>) => void) {
  if (node == null) return null;

  inOrder(node.left, visit);
  visit(node);
  inOrder(node.right, visit);
}

export function outOrder<T>(node: Maybe<BinaryTree<T>>, visit: (node: BinaryTree<T>) => void) {
  if (node == null) return null;

  outOrder(node.right, visit);
  visit(node);
  outOrder(node.left, visit);
}

export function postOrder<T>(node: Maybe<BinaryTree<T>>, visit: (node: BinaryTree<T>) => void) {
  if (node == null) return null;

  postOrder(node.left, visit);
  postOrder(node.right, visit);
  visit(node);
}

export function levelOrder<T>(root: BinaryTree<T>, visit: (node: BinaryTree<T>) => void) {
  const q = new Queue<BinaryTree<T>>();
  q.enqueue(root)
  let node: BinaryTree<T>;

  while (!q.empty()) {
    node = q.dequeue() as BinaryTree<T>;
    visit(node);

    if (node.left !== null) {
      q.enqueue(node.left);
    }

    if (node.right !== null) {
      q.enqueue(node.right);
    }
  }
}
