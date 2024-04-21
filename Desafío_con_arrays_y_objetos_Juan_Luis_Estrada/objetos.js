let objeto = {
    cita1: {
        hora: "09:00",
        especialista: "RENÉ POBLETE",
        paciente: "ANA GELLONA",
        rut: "13123329-7",
        prevision: "ISAPRE",
    },
    cita2: {
        hora: "09:30",
        especialista: "MARIA SOLAR",
        paciente: "RAMIRO ANDRADE",
        rut: "12221451-K",
        prevision: "FONASA",
    },
    cita3: {
        hora: "10:00",
        especialista: "RAUL LOYOLA",
        paciente: "CARMEN ISLA",
        rut: "10112348-3 ",
        prevision: "ISAPRE",
    },
    cita4: {
        hora: "10:30",
        especialista: "ANTONIO LARENAS",
        paciente: "PABLO LOAYZA",
        rut: "13453234-1",
        prevision: "ISAPRE",
    },
    cita5: {
        hora: "12:00",
        especialista: "MATIAS ARAVENA",
        paciente: "SUSANA POBLETE",
        rut: "14345656-6",
        prevision: "FONASA",
    },
};

function imprimirCitasEnPagina(contenedor) {
    contenedor.innerHTML = `
        <table>
            <tr>
                <th>Hora</th>
                <th>Especialista</th>
                <th>Paciente</th>
                <th>RUT</th>
                <th>Previsión</th>
            </tr>
            ${Object.values(objeto)
            .map(
                (cita) => `
                    <tr>
                        <td>${cita.hora}</td>
                        <td>${cita.especialista}</td>
                        <td>${cita.paciente}</td>
                        <td>${cita.rut}</td>
                        <td>${cita.prevision}</td>
                    </tr>
                `
            )
            .join("")}
        </table>
    `;
}

function eliminarPrimerYUltimo(objeto) {
    // Convertir el objeto en un array de pares clave-valor
    const arrayCitas = Object.entries(objeto);

    // Verificar si hay al menos dos elementos
    if (arrayCitas.length >= 2) {
        // Eliminar el primer elemento del array
        arrayCitas.shift();
        // Eliminar el último elemento del array
        arrayCitas.pop();

        // Reconstruir el objeto a partir del array
        objeto = Object.fromEntries(arrayCitas);

        return objeto;
    } else {
        console.log(
            "El objeto tiene menos de dos citas. No se pueden eliminar la primera y la última."
        );
        return objeto; // Devolver el objeto original sin cambios
    }
}

function imprimirConsultasdocumentwrite(objeto) {
    // Obtener un array de las citas médicas del objeto
    const citas = Object.values(objeto);

    // Utilizar map() para generar un array con el formato deseado para cada cita
    const citasFormateadas = citas.map(cita => {
        return `${cita.hora} - ${cita.especialista} - ${cita.paciente} - ${cita.rut} - ${cita.prevision} <br>`;
    });

    // Utilizar document.write() para escribir todas las citas formateadas en el documento
    document.write(citasFormateadas.join(""));
}



// imprimirConsultaslistanombres

function imprimirConsultaslistanombres(objeto) {
    // Obtener un array de las citas médicas del objeto
    const citas = Object.values(objeto);

    // Utilizar map() para generar un array con el formato deseado para cada cita
    const citasFormateadas = citas.map(cita => {
        return `${cita.paciente}<br>`;
    });

    // Utilizar document.write() para escribir todas las citas formateadas en el documento
    document.write(citasFormateadas.join(""));
}



function imprimir_FiltroPacientes_Isapre(objeto) {
    // Obtener un array de todas las citas médicas del objeto
    const citas = Object.values(objeto);

    // Filtrar las citas médicas donde la previsión sea ISAPRE
    const citasIsapre = citas.filter(cita => cita.prevision === "ISAPRE");

    // Utilizar map() para generar un nuevo array con el formato deseado para cada cita
    const citasFormateadas = citasIsapre.map(cita => `${cita.paciente} - ${cita.prevision} <br>`);

    // Escribir las citas formateadas en el documento utilizando document.write()
    document.write(citasFormateadas.join(""));
}








function imprimir_FiltroPacientes_Fonasa(objeto) {
    // Obtener un array de todas las citas médicas del objeto
    const citas = Object.values(objeto);

    // Filtrar las citas médicas donde la previsión sea ISAPRE
    const citasIsapre = citas.filter(cita => cita.prevision === "FONASA");

    // Utilizar map() para generar un nuevo array con el formato deseado para cada cita
    const citasFormateadas = citasIsapre.map(cita => `${cita.paciente} - ${cita.prevision} <br>`);

    // Escribir las citas formateadas en el documento utilizando document.write()
    document.write(citasFormateadas.join(""));
}


const contenedorTabla = document.getElementById("contenedorTabla");
const tableButton = document.getElementById("btn-tabla");
const tableButton_elimina = document.getElementById("btn-tabla_elimina");
const tableButton_documentwrite = document.getElementById("btn-tabla_documentwrite");
const tableButton_listanombres = document.getElementById("btn-tabla_listanombres");
const tableButton_FiltroPacientes_Isapre = document.getElementById("btn-tabla_FiltroPacientes_Isapre");
const tableButton_FiltroPacientes_Fonasa = document.getElementById("btn-tabla_FiltroPacientes_Fonasa");








tableButton.addEventListener("click", function () {
    imprimirCitasEnPagina(contenedorTabla);
});




tableButton_elimina.addEventListener("click", function () {
    console.log("elimina");

    // Eliminar el primer y último elemento del objeto
    objeto = eliminarPrimerYUltimo(objeto);

    // Volver a imprimir la tabla con el objeto modificado
    imprimirCitasEnPagina(contenedorTabla);
});




tableButton_documentwrite.addEventListener("click", function () {
   
    imprimirConsultasdocumentwrite(objeto)

});

tableButton_listanombres.addEventListener("click", function () {
   
    imprimirConsultaslistanombres(objeto)

});

tableButton_FiltroPacientes_Isapre.addEventListener("click", function () {
   
    imprimir_FiltroPacientes_Isapre(objeto)

});




tableButton_FiltroPacientes_Fonasa.addEventListener("click", function () {
   
    imprimir_FiltroPacientes_Fonasa(objeto)

});