class Vector {
    #data
    #length
    #limit

    constructor(limit) {
        if (limit < 1) {
            throw new Error("Limite inválido: limite > 0")
        }
        this.#data = new Array(limit)
        this.#length = 0
        this.#limit = limit
    }

    list() {
        if (this.#length === 0) {
            throw new Error("Lista vazia")
        }
        for (let i = 0; i < this.#length; i++) {
            process.stdout.write(`${this.#data[i]}`);
            if (i < this.#length - 1) {
                process.stdout.write(', ');
            }
        }
        process.stdout.write("\n")
        return
    }

    clearAll() {
        if (this.#length > 0) {
            this.#length = 0
            process.stdout.write("Vetor zerado com sucesso.")
        }
    }

    insert(element) {

        if (element == null) {
            throw new Error("Elemento inválido ou nulo")
        }

        if (this.#length == this.#limit) {
            throw new Error("Vetor cheio. Remova dados antes de prosseguir")
        }

        this.#data[this.#length] = element
        this.#length = this.#length + 1

    }

    insertOrdered(element) {
        if (this.#length === this.#limit) {
            process.stdout.write("Não é possível inserir. Vetor cheio\n");
            return;
        }
    
        let i = 0;
        while (i < this.#length && this.#data[i] < element) {
            i++;
        }
    
        for (let j = this.#length; j > i; j--) {
            this.#data[j] = this.#data[j - 1];
        }
    
        this.#data[i] = element;
    
        this.#length++;
    }

    update(a, b){

        if(!this.#data.includes(a)){
            process.stdout.write("Dado não encontrado")
            process.stdout.write("\n")
            return
        }

        for(let i = 0 ; i < this.#length ; i++){
            if (this.#data[i] == a){
                this.#data[i] = b
            }
        }
    }
}

let v = new Vector(10)
v.insertOrdered(99)
v.insertOrdered(25)
v.insertOrdered(10)
v.insertOrdered(5)
v.insertOrdered(12)
v.insertOrdered(22)
v.insertOrdered(55)
v.update(101,0)
v.list()