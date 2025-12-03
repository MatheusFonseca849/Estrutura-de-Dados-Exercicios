import NoArv from "./node.ts"

/*
b)
Definição recursiva:

Para todo n > 0:
f(n) = 2, se n = 1
f(n) = n + (n + 1), se n > 1

Algoritimo iterativo:
*/

function sumAllPositive(n: number): number | undefined {
    if (n < 0){
        return undefined
    }
    if (n === 1){
        return 1
    }
    return n + sumAllPositive(n - 1)
}
console.log("b) resultado do algoritimo recursivo: " + sumAllPositive(10))

/*
c)
Definição recursiva:

Para todo n > 0:
f(n) = 2, se n = 1,
f(n) = 2n + f(n -1), se n > 1

Algoritimo iterativo:
*/

function sumAllOdds(n : number): number | undefined {
    if (n < 0){
        return undefined
    }
    if (n === 1){
        return 2
    }
    return 2 * n + sumAllOdds(n - 1)
}
console.log("c) resultado do algoritimo recursivo: " + sumAllOdds(10))

/**
 ******** Árvores Binárias *********
 */

class BinTree {
    root: NoArv<number> | null;

    constructor() {
        this.root = null;
    }

    insertSorted(value: number): NoArv<number> {
        // Se a raiz for nula, retorna o nó inserido como raiz
        if (this.root === null) {
            this.root = new NoArv(value);
            return this.root;
        }

        // Helper function para inserção recursiva
        const insertNode = (node: NoArv<number> | null, value: number): NoArv<number> => {
            if (node === null) {
                return new NoArv(value);
            }

            // Se o nó já existir, retorna o nó e pula a inserção
            if (value === node.dado) {
                return node;
            }

            // Insere a esquerda se o valor for menor
            if (value < node.dado) {
                node.esq = insertNode(node.esq, value);
            } 
            // Insere a direita se o valor for maior
            else {
                node.dir = insertNode(node.dir, value);
            }

            return node;
        };

        insertNode(this.root, value);
        return this.root;
    }

    countNodes(): number {
        // Quando o nó raiz for nulo, return 0
        if (this.root === null) {
            return 0;
        }

        const countNodesRecursive = (node: NoArv<number> | null): number => {
            if (node === null) {
                return 0;
            }
            return 1 + countNodesRecursive(node.esq) + countNodesRecursive(node.dir);
        };

        return countNodesRecursive(this.root);
    }

    calculateHeight(): number {
        const calculateHeightRecursive = (node: NoArv<number> | null): number => {
            // Quando um nó é inválido, return -1
            if (node === null) {
                return -1;
            }

            const leftHeight = calculateHeightRecursive(node.esq);
            const rightHeight = calculateHeightRecursive(node.dir);

            return Math.max(leftHeight, rightHeight) + 1;
        };

        return calculateHeightRecursive(this.root);
    }
}

// Constrói uma árvore binária com os números 5, 2, 8, 0, 4, e 9
const tree = new BinTree();
tree.insertSorted(5);
tree.insertSorted(2);
tree.insertSorted(8);
tree.insertSorted(0);
tree.insertSorted(4);
tree.insertSorted(9);

console.log("\n******** Árvore Binária *********");
console.log("Número de nós:", tree.countNodes());
console.log("Altura da árvore:", tree.calculateHeight());

// Testa inserção de duplicata
tree.insertSorted(5);
console.log("Após tentar inserir duplicado (5):", tree.countNodes()); // Deve ainda ser 6

