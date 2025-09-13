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
            process.stdout.write("Lista vazia" + '\n')
            return
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
            process.stdout.write(`Dado ${a} não encontrado` + '\n')
            return
        }

        for(let i = 0 ; i < this.#length ; i++){
            if (this.#data[i] == a){
                this.#data[i] = b
                break
            }
        }
    }

    updateAll(a, b){
        for(let i = 0 ; i < this.#length ; i++){
            if (this.#data[i] == a){
                this.#data[i] = b
            }
        }
    }

    updateByIndex(index, element){
        if (index < 0 || index >= this.#length) {
            process.stdout.write("Índice inválido\n");
            return;
        }
        this.#data[index] = element;
    }

    search(element){
        for(let i = 0 ; i < this.#length ; i++){
            if (this.#data[i] == element){
                process.stdout.write(`Elemento ${element} encontrado no índice ${i}` + '\n')
                return i
            }
        }
        process.stdout.write(`Elemento ${element} não encontrado` + '\n')
        return -1
    }

    searchByIndex(index){
        if (index < 0 || index >= this.#length) {
            process.stdout.write("Índice inválido\n");
            return;
        }
        process.stdout.write(`Elemento ${this.#data[index]} encontrado no índice ${index}` + '\n')
        return this.#data[index]
    }

    remove(element){
        if (!this.#data.includes(element)) {
            process.stdout.write(`Elemento ${element} não encontrado` + '\n')
            return
        }
        for (let i = 0; i < this.#length; i++) {
            if (this.#data[i] == element) {
                this.#data[i] = this.#data[i + 1]
            }
        }
        this.#length--
    }

    removeByIndex(index){
        if (index < 0 || index >= this.#length) {
            process.stdout.write("Índice inválido\n");
            return;
        }
        
        for (let i = index; i < this.#length; i++) {
            this.#data[i] = this.#data[i + 1]
        }
        this.#length--
    }

    sort(){
        for (let i = 0; i < this.#length; i++) {
            for (let j = i + 1; j < this.#length; j++) {
                if (this.#data[i] > this.#data[j]) {
                    let aux = this.#data[i]
                    this.#data[i] = this.#data[j]
                    this.#data[j] = aux
                }
            }
        }
    }
}

let v = new Vector(10)
v.insert(99)
v.insert(25)
v.insert(99)
v.insert(10)
v.insert(5)
v.insert(12)
v.insert(99)
v.insert(22)
v.insert(55)
v.updateAll(99,101)
v.searchByIndex(5)
v.search(101)
v.remove(101)
v.removeByIndex(5)
v.list()
v.sort()
v.list()