const pacientesRadiologia = [
    {hora: '11:00', especialista: 'Ignacio Schulz', paciente: 'Francisca Rojas', rut: '9878782-1', prevision: 'fonasa'},
    {hora:'11:30', especialista:'Federico Subercaseaux', paciente:'Pamela Estrada', rut:'15345241-3', prevision: 'isapre'},
    {hora:'15:00', especialista:'Fernando Wurthz', paciente:'Armando Luna', rut:'16445345-9', prevision: 'isapre'},
    {hora:'15:30', especialista:'Ana Maria Godoy', paciente:'Manuel Godoy', rut:'17666419-0', prevision: 'fonasa'},
    {hora:'16:00', especialista:'Patricia Suazo', paciente:'Ramon Ulloa', rut:'14989389-K', prevision: 'fonasa'}
]

const pacientesTraumatologia = [
  {
    hora: "08:00",
    especialista: "Maria Paz Altuzarra",
    paciente: "Paula Sanchez",
    rut: "9878782-1",
    prevision: "fonasa",
  },
  {
    hora: "10:00",
    especialista: "Raul Araya",
    paciente: "Angelica Navaz",
    rut: "15345241-3",
    prevision: "isapre",
  },
  {
    hora: "10:30",
    especialista: "Maria Arriagada",
    paciente: "Ana Klapp",
    rut: "16445345-9",
    prevision: "isapre",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "isapre",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "fonasa",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "isapre",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "isapre",
  },
];

const pacientesDental = [
  {
    hora: "08:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "isapre",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "fonasa",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "fonasa",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "fonasa",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "fonasa",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "isapre",
  },
];


const contenedorPrimeraUltimaCita = document.getElementById("contenedor-primera-ultima-citas-medicas");
const contenedorCitasMedicas = document.getElementById("contenedor-citas-medicas");

function crearHtmLPrimerYUltimaCita (pacientesEspecialidad) {
    return `
        <h4>Primera cita: ${pacientesEspecialidad[0].paciente} - ${pacientesEspecialidad[0].prevision}</h4>
        <h4>Ultima cita: ${pacientesEspecialidad[pacientesEspecialidad.length - 1].paciente} - ${pacientesEspecialidad[pacientesEspecialidad.length - 1].prevision}</h4>
    `
}


function recorrerCitasPorEspecialidad (pacientesPorEspecialidad) {
    
    let htmlCode = ""

    for (paciente of pacientesPorEspecialidad) {
        htmlCode += `
            <tr>
                <td>${paciente.hora}</td>
                <td>${paciente.especialista}</td>
                <td>${paciente.paciente}</td>
                <td>${paciente.rut}</td>
                <td>${paciente.prevision}</td>
            </tr>
        `
    }

    return htmlCode
}


function imprimirCitasMedicas () {
    contenedorPrimeraUltimaCita.innerHTML = `
        <h2>Radiología</h2>
        ${crearHtmLPrimerYUltimaCita(pacientesRadiologia)}
        <br>
        <h2>Traumatología</h2>
        ${crearHtmLPrimerYUltimaCita(pacientesTraumatologia)}
        <br>
        <h2>Dental</h2>
        ${crearHtmLPrimerYUltimaCita(pacientesDental)}
    `;
}

function imprimirTodasLasCitasMedicas () {
    contenedorCitasMedicas.innerHTML = `
        <h2>Tabla Radiologia</h2>
        <table border=1>
            <thead>
                <th>HORA</th>
                <th>ESPECILISTA</th>
                <th>PACIENTE</th>
                <th>RUT</th>
                <th>PREVISION</th>
            </thead>
            <tbody>
                ${recorrerCitasPorEspecialidad(pacientesRadiologia)}
            </tbody>
        </table>

        <h2>Tabla Traumatologia</h2>
        <table border=1>
            <thead>
                <th>HORA</th>
                <th>ESPECILISTA</th>
                <th>PACIENTE</th>
                <th>RUT</th>
                <th>PREVISION</th>
            </thead>
            <tbody>
                ${recorrerCitasPorEspecialidad(pacientesTraumatologia)}
            </tbody>
        </table>

        <h2>Tabla Dental</h2>
        <table border=1>
            <thead>
                <th>HORA</th>
                <th>ESPECILISTA</th>
                <th>PACIENTE</th>
                <th>RUT</th>
                <th>PREVISION</th>
            </thead>
            <tbody>
                ${recorrerCitasPorEspecialidad(pacientesDental)}
            </tbody>
        </table>

    `;
}

imprimirCitasMedicas()
imprimirTodasLasCitasMedicas()