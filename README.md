# Análisis del Juego Snake con Cola 🐍

En este juego de la serpiente, se utiliza una **Cola** para gestionar eficientemente el movimiento y crecimiento de la serpiente. A continuación, se describen los principales componentes y su funcionamiento:

- **Serpiente** 🟢: La serpiente se modela como una cola de coordenadas `(x, y)`. La cabeza de la serpiente siempre se encuentra al final de la cola, y el resto del cuerpo sigue el principio FIFO (First In, First Out). Esto significa que el primer segmento en entrar es el primero en salir.

- **Movimiento** 🔄: La serpiente se mueve continuamente mediante el siguiente proceso:
  1. **Eliminar** la última parte del cuerpo (primero en entrar, primero en salir).
  2. **Calcular** la nueva posición de la cabeza en función de la dirección seleccionada.
  3. **Agregar** la nueva cabeza al final de la cola.
  4. **Actualizar visualmente** la serpiente en el tablero.

- **Crecimiento** ➕: Cuando la cabeza de la serpiente coincide con la comida:
  1. Se **agrega** una nueva cabeza a la cola sin eliminar la última parte del cuerpo.
  2. Esto **aumenta** el tamaño de la serpiente, permitiéndole crecer.

- **Colisiones** 💥: Se comprueban dos tipos de colisiones:
  1. **Con los bordes**: Si la cabeza de la serpiente toca cualquier borde del tablero, el juego termina.
  2. **Con su propio cuerpo**: Si la cabeza se encuentra con cualquier segmento del cuerpo, también se termina el juego.

- **Generación de Comida** 🍎: La comida aparece aleatoriamente en una nueva posición del tablero:
  1. Se selecciona una ubicación dentro de los límites del tablero.
  2. Se **verifica** que la comida no esté dentro de la serpiente. Si la posición está ocupada por el cuerpo de la serpiente, se genera una nueva ubicación hasta encontrar un espacio libre.

## Conclusión ✅

El uso de la cola facilita un **movimiento fluido** y un **crecimiento eficiente** de la serpiente. La **gestión de las colisiones** y la **generación de comida** aseguran un juego desafiante y bien balanceado. Este diseño es sólido, lo que permite una implementación sencilla pero entretenida. 🚀
