class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value: T) {
        if(value === null || value === undefined) {
            throw new Error("Value cannot be null or undefined");
        }
        const newNode = new Node<T>(value);
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

    remove(value: T) {
        if (this.head === null) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
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
            process.stdout.write(current.value.toString() + " ");
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
}

let list = new LinkedList<number>();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(10);

list.show()

list.invert();

list.show()
