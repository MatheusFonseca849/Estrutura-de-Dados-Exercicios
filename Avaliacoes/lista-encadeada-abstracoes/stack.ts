class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class Stack<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    showHead<T>() {
        if (this.head === null) {
            return undefined;
        }
        process.stdout.write(this.head.value.toString() + "\n");
        return this.head.value;
    }

    push(value: T) {
        const newNode = new Node<T>(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop() {
        if (this.head === null) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    show() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.value.toString() + " ");
            current = current.next;
        }
        process.stdout.write("\n");
    }
}

let stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

stack.showHead();

// stack.pop();

// stack.show();
