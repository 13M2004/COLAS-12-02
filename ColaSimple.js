class Cola{
    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if (this.inEmpty()){
            return "La cola está vacia";
        }
        return this.items.shift();
    }

    frente(){
        return this.items[0];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }

    mostrar(){
        console.log(this.items);
    }
}

//Prueba de la cola
let miCola = new Cola();

miCola.enqueue("Cliente 1");
miCola.enqueue("Cliente 2");
miCola.enqueue("Cliente 3");
miCola.mostrar();
console.log("Atendiendo:", miCola.dequeue())
console.log("Siguiente en la fila:". miCola.frente);