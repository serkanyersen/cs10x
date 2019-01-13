export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value > this.value) {
            if (this.right !== null) {
                this.right.insert(value);
            } else {
                this.right = new Node(value);
            }
        } else {
            if (this.left !== null) {
                this.left.insert(value);
            } else {
                this.left = new Node(value);
            }
        }
    }

    find (value) {
        if (value === this.value) {
            return true;
        } else if (value > this.value && this.right !== null) {
            return this.right.find(value);
        } else if (value < this.value && this.left !== null) {
            return this.left.find(value);
        }

        return false;
    }
}
