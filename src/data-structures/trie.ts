import { Maybe } from "../utils.ts";

export class TrieNode {
  value: Maybe<string>;
  parent: Maybe<TrieNode>;
  children: Map<string, TrieNode>;
  end: boolean;

  constructor(key: Maybe<string>, parent: TrieNode | null = null) {
    this.value = key;
    this.parent = parent;
    this.children = new Map();
    this.end = false;
  }

  /**
   * Get the whole word
   */
  getWord() {
    const word = [];
    // deno-lint-ignore no-this-alias
    let node: TrieNode | null = this;

    while (node !== null) {
      word.unshift(node.value);
      node = node.parent;
    }
    return word.join("");
  }
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word: string) {
    let node = this.root;

    for (const c of word.toLocaleLowerCase()) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode(c, node));
      }
      node = node.children.get(c) as TrieNode;
    }

    node.end = true;
  }

  contains(word: string) {
    let node = this.root;

    for (const c of word) {
      if (node.children.has(c)) {
        node = node.children.get(c) as TrieNode;
      } else {
        return false;
      }
    }

    return node.end;
  }

  find(prefix: string) {
    let node = this.root;
    const output: string[] = [];

    for (const c of prefix) {
      if (node.children.has(c)) {
        node = node.children.get(c) as TrieNode;
      } else {
        return output;
      }
    }

    Trie.findAllWords(node, output);

    return output;
  }

  static findAllWords(node: TrieNode, arr: string[]) {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (const [, child] of node.children) {
      Trie.findAllWords(child, arr);
    }
  }
}
