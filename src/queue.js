export class Queue {
    constructor(init=[]) {
        this.__queue = init;
    }

    enqueue(val) {
        this.__queue.push(val);
    }

    dequeue() {
        return this.__queue.shift();
    }

    peek() {
        return this.__queue[0];
    }

    clear () {
        this.__queue.length = 0;
    }

    empty () {
        return this.__queue.length === 0;
    }

    search (q) {
        return this.__queue.includes(q);
    }

    get size () {
        return this.__queue.length;
    }

    /**
     * Make queue iterable
     */
    *[Symbol.iterator]() {
        for (let i=0; i < this.__queue.length; i++) {
            yield [i, this.__queue[i]];
        }
    }
}
