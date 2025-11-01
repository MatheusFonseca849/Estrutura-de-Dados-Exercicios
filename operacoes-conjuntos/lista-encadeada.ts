import Node from "./Node.ts";

class LinkedList<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data: T) {
        if(data === null || data === undefined) {
            throw new Error("Value cannot be null or undefined");
        }
        const newNode = new Node<T>(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(data: T) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    show() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.data.toString() + " ");
            current = current.next;
        }
        process.stdout.write("\n");
    }
    
    invert() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    sort() {
        if (this.head === null) {
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            let next = current.next;
            if (current.data > next.data) {
                let temp = current.data;
                current.data = next.data;
                next.data = temp;
            }
            current = next;
        }
    }

    union(list: LinkedList<T>) {
        let current = list.head;
        while (current !== null) {
            this.add(current.data);
            current = current.next;
        }
    }
}

export default LinkedList;
