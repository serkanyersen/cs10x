// @ts-check
export class TrieNode {
  /**
   * Individual Node of the Trie
   * @param {string} key
   * @param {TrieNode|null} parent
   */
  constructor (key, parent = null) {
    /** @type {string} */
    this.value = key
    /** @type {TrieNode} */
    this.parent = parent
    /** @type {Map<string, TrieNode>} */
    this.children = new Map()
    /** @type {boolean} */
    this.end = false
  }

  /**
   * Get the whole word
   */
  getWord () {
    /** @type {string[]} */
    const word = []
    /** @type {TrieNode} */
    let node = this

    while (node !== null) {
      word.unshift(node.value)
      node = node.parent
    }

    return word.join('')
  }
}

export class Trie {
  constructor () {
    this.root = new TrieNode(null)
  }

  /**
   * @param {string} word
   */
  insert (word) {
    let node = this.root

    for (let c of word.toLocaleLowerCase()) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode(c, node))
      }
      node = node.children.get(c)
    }

    node.end = true
  }

  /**
   * @param {string} word
   */
  contains (word) {
    let node = this.root

    for (let c of word) {
      if (node.children.has(c)) {
        node = node.children.get(c)
      } else {
        return false
      }
    }

    return node.end
  }

  /**
   * @param {string} prefix
   */
  find (prefix) {
    let node = this.root
    /** @type {string[]} */
    const output = []

    for (let c of prefix) {
      if (node.children.has(c)) {
        node = node.children.get(c)
      } else {
        return output
      }
    }

    Trie.findAllWords(node, output)

    return output
  }

  /**
   * @param {TrieNode} node
   * @param {string[]} arr
   */
  static findAllWords (node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord())
    }

    // iterate through each children, call recursive findAllWords
    for (let [, child] of node.children) {
      Trie.findAllWords(child, arr)
    }
  }
}
