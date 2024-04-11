function Cachipun(cantidad) {
    let juegosRealizados = 0;

    while (juegosRealizados < cantidad) {
        juegosRealizados++;

        // Obtener la opción del user usando prompt
        let opcionUsuario = prompt("Juego " + juegosRealizados + "/" + cantidad + ": Elige: piedra, papel o tijeras").toLowerCase();

        // Verificar si la opción del usuario es válida
        if (opcionUsuario !== 'piedra' && opcionUsuario !== 'papel' && opcionUsuario !== 'tijeras') {
            console.log("Opción no válida. Por favor, elige piedra, papel o tijeras.");
            continue;
        }

        // Generar la opción de la CPU
        let opcionCPU;
        const numeroAleatorio = Math.floor(Math.random() * 3);

        if (numeroAleatorio === 0) {
            opcionCPU = 'piedra';
        } else if (numeroAleatorio === 1) {
            opcionCPU = 'papel';
        } else {
            opcionCPU = 'tijeras';
        }

        console.log("Usuario elige: " + opcionUsuario);
        console.log("CPU elige: " + opcionCPU);

        // resultado del juego
        if (opcionUsuario === opcionCPU) {
            console.log("¡Empate!");
        } else if (
            (opcionUsuario === 'piedra' && opcionCPU === 'tijeras') ||
            (opcionUsuario === 'papel' && opcionCPU === 'piedra') ||
            (opcionUsuario === 'tijeras' && opcionCPU === 'papel')
        ) {
            console.log("¡You Win!");
        } else {
            console.log("¡La CPU gana!");
        }
    }
}

// cantidad de veces que quiere jugar cachupum
let cantidadJuegos = parseInt(prompt("¿Cuántas veces quieres jugar cachupum?"));
Cachipun(cantidadJuegos);
