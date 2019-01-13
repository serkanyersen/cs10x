// Write your example code
import { Trie } from './data-structures/trie'

console.log('\n' + '-'.repeat(80) + '\n') // separate each execution

const t = new Trie()

t.insert('serkan')
t.insert('sercan')
t.insert('seyhun')

console.log('find ser*: ', t.find('ser'))
