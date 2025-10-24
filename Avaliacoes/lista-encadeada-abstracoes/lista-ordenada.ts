class Node<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class ListaOrdenada<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value: T) {
        const newNode = new Node<T>(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null && current.next.value < value) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
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

let listaOrdenada = new ListaOrdenada<number>();

listaOrdenada.add(1);
listaOrdenada.add(10);
listaOrdenada.add(2);
listaOrdenada.add(5);
listaOrdenada.add(3);
listaOrdenada.add(6);
listaOrdenada.add(4);
listaOrdenada.add(8);
listaOrdenada.add(9);

listaOrdenada.show();
