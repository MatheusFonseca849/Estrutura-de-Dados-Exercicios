class Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class ListaEncadeadaDupla<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addAtStart(value: T) {
        const newNode = new Node<T>(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtEnd(value: T) {
        const newNode = new Node<T>(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeAtStart() {
        if (this.head === null) {
            return;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return value;
    }

    removeAtEnd() {
        if (this.tail === null) {
            return;
        }
        const value = this.tail.value;
        this.tail = this.tail.prev;
        this.tail.next = null;
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
        this.tail = this.head;
    }
}

let lista = new ListaEncadeadaDupla<number>();

lista.addAtStart(10);
lista.addAtStart(11);
lista.addAtStart(12);
lista.addAtStart(13);
lista.addAtStart(14);
lista.addAtStart(15);
lista.addAtStart(16);
lista.addAtStart(17);
lista.addAtStart(18);
lista.addAtStart(19);

lista.show();

lista.invert();

lista.show();