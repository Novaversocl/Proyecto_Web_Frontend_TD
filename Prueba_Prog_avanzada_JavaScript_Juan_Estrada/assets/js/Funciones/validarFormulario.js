import { Leon, Lobo, Oso, Serpiente, Aguila } from "../Model/Clases.js";

//no fue necesario el export pero igual
export let arrayAnimalesRegristrados = [];
export function validarFormulario() {


  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("hola validar con el boton");

      let container = document.getElementById("Animales");
      let seletAnimal = document.getElementById("animal").value;
      let seletAdad = document.getElementById("edad").value;
      let texAreaComentario = document.getElementById("comentarios").value;
      let imagenAnimal = document
        .getElementById("imagenAnimal")
        .getAttribute("src");

      if (
        seletAnimal == "Seleccione un animal" ||
        seletAdad == "Seleccione un rango de años" ||
        !isNaN(texAreaComentario)
      ) {
        // console.log("Por favor ingrese la información Correcta");
        alert("Por favor ingrese la información Correcta");
      } else {
        console.log("validación realizada con éxito");

        let animal;
        switch (seletAnimal) {
          case "Leon":
            animal = new Leon(
              seletAnimal,
              seletAdad,
              imagenAnimal,
              texAreaComentario,
              "assets/sounds/Rugido.mp3"
            );
            break;
          case "Lobo":
            animal = new Lobo(
              seletAnimal,
              seletAdad,
              imagenAnimal,
              texAreaComentario,
              "assets/sounds/Aullido.mp3"
            );
            break;
          case "Oso":
            animal = new Oso(
              seletAnimal,
              seletAdad,
              imagenAnimal,
              texAreaComentario,
              "assets/sounds/Grunido.mp3"
            );
            break;
          case "Serpiente":
            animal = new Serpiente(
              seletAnimal,
              seletAdad,
              imagenAnimal,
              texAreaComentario,
              "assets/sounds/Siseo.mp3"
            );
            break;
          case "Aguila":
            animal = new Aguila(
              seletAnimal,
              seletAdad,
              imagenAnimal,
              texAreaComentario,
              "assets/sounds/Chillido.mp3"
            );
            break;
          // Agregar casos para otras clases si es necesario
          default:
            // Si no se seleccionó un animal válido, mostrar un mensaje de error
            alert("Seleccione un animal válido");
            return; // Salir de la función
        }

        console.log("Animal creado:", animal);
        arrayAnimalesRegristrados.push(animal);

        // ------------------------------------------------------

        let html = "";
        arrayAnimalesRegristrados.forEach((animal) => {
          console.log(animal.img);
        
      

    html += `
    

    <div class="col-3 pt-3">
      <div class="card">
        <img class="card-img-top mp3-cover contenedor_img_card" src="${animal.img}" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">${animal.nombre}</h4>
          <p class="card-text">${animal.edad}</p>
          <div class="mp3-audio">
            <audio controls class="mp3-auido">
              <source src="${animal.sonido}" type="audio/mpeg">
         
           </audio>
          </div>
        </div>
      </div>
      
    </div>
  
  
          `;
        });



        container.innerHTML = html;

        // -----------------------------------------------

        console.log("Todos los animales:", arrayAnimalesRegristrados);
        // Hacer lo que necesites con la instancia del animal, por ejemplo, almacenarla en algún lugar

        // Restablecer el formulario después de crear el animal
        document.getElementById("formulario").reset();
        //vuelve la imagen por defecto
        document
          .getElementById("imagenAnimal")
          .setAttribute("src", "assets/imgs/Default.jpg");
      }

      console.log(seletAnimal);
      console.log(seletAdad);
      console.log(texAreaComentario);
    });
}
