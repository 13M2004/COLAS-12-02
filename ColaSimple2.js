class Cola {
    constructor(limite) {
        this.items = [];
        this.limite = limite; // Establece el límite máximo de la cola
    }

    enqueue(element) {
        if (this.isFull()) {
            return "La cola está llena";
        }
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    frente() {
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    isFull() {
        return this.items.length >= this.limite;
    }

    mostrar() {
        console.log(this.items);
    }

    tamaño() {
        return this.items.length;
    }
}

// Prueba de la cola
let limiteCola = 3; // Establece el límite de la cola
let miCola = new Cola(limiteCola);

miCola.enqueue("Cliente 1");
miCola.enqueue("Cliente 2");
miCola.enqueue("Cliente 3");
miCola.mostrar();
console.log("Atendiendo:", miCola.dequeue());
console.log("Siguiente en la fila:", miCola.frente());
miCola.enqueue("Cliente 4"); // Intentar agregar un cuarto cliente
miCola.mostrar();
console.log("Tamaño de la cola:", miCola.tamaño());