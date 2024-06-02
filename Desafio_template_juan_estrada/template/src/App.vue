<template>
  
  <div id="app" class="container fondo">
    
    <form class="form-container">
     
      <label  for="id_colorInput">Color de Fondo:</label>
      <div class="salto"></div>

      <!-- <input  type="color" id="id_colorInput" v-model="v_model_backgroundColor"> --> 


      <label for="gradientStart">Inicio:</label>
<input type="color" id="gradientStart" v-model="v_model_gradientStartColor">
<div class="salto"></div>


<label for="gradientEnd">Fin:</label>
<input class="derecha" type="color" id="gradientEnd" v-model="v_model_gradientEndColor">
<div class="salto"></div>


      
      <div class="salto"></div>
      <label for="id_textInput">Color de Texto: </label>
      <input  type="color" id="id_textInput" v-model="v_model_textColor">
      <label>
        <div class="salto"></div>
        <input type="checkbox" v-model="v_model_showText"> Mostrar Texto
      </label>
      <div class="salto"></div>


<label for="borderInput">Borde:</label>
<div class="salto"></div>
      <input type="range" id="borderInput" v-model="v_model_borderWidth" min="0" max="50" step="1">
      <span>{{ v_model_borderWidth }}px</span>


      <div class="salto"></div>
      <textarea v-model="v_model_text"></textarea>
      <div class="salto"></div>


      <label for="id_fontInput">Tipo de Fuente:</label>
      <div class="salto"></div>
      <select v-model="v_model_font">
        <option value="sans-serif">Sans-serif</option>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="cursive">Cursive</option>
        <option value="monospace">Monospace</option>
      </select>



      <label>
        <div class="salto"></div>
        <input type="checkbox" v-model="v_model_opacity"> Opacidad
      </label>

      <div class="salto"></div>
      <label>Tamaño de Letra:</label>
      <div>
        <label>
          <input type="radio" value="pequeño" v-model="v_model_fontSize"> Pequeño
        </label>
        <div class="salto"></div>
        <label>
          <input type="radio" value="mediano" v-model="v_model_fontSize"> Mediano
        </label>
        <div class="salto"></div>
        <label>
          <input type="radio" value="grande" v-model="v_model_fontSize"> Grande
        </label>
      </div>
    </form>


    <div class="square-container">
      <div class="square"
        :style="{  background: v_model_gradientStyle,
           color: v_model_textColor,
           opacity: v_model_opacity ? '0.5' : '1' ,
           'border-radius':v_model_borderWidth + 'px'
           
           
           }">
        <span :style="{ fontSize: fontSize, 'font-family':v_model_font}" v-show="v_model_showText">{{ v_model_text }}</span>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      v_model_backgroundColor: '',
      v_model_textColor: 'white',
      v_model_showText: true,
      v_model_text: 'Hola Mundo',
      v_model_font: 'sans-serif',
      v_model_bold: false,
      v_model_fontSize: 'pequeño',
      v_model_opacity: false,
      v_model_borderWidth: 0,
      v_model_gradientStartColor: '#251177', // Color de inicio predeterminado
      v_model_gradientEndColor: '#ff0000' // Color de fin predeterminado
    }
  },
  computed: {
    v_model_gradientStyle() {
      return `linear-gradient(to bottom right, ${this.v_model_gradientStartColor}, ${this.v_model_gradientEndColor})`;
    },
    fontSize() {
      if (this.v_model_fontSize === 'pequeño') {
        return '1rem';
      } else if (this.v_model_fontSize === 'mediano') {
        return '2rem';
      } else if (this.v_model_fontSize === 'grande') {
        return '3rem';
      } else {
        return '1rem'; // Tamaño predeterminado si no se selecciona nada
      }
    }
  }
}
</script>



<style>
.container {

  display: flex;



}

.fondo {

  background-color: rgb(0, 11, 26);
}

.form-container {
margin-left: 2rem;
margin-top: 2rem;
padding-left: 2rem;
padding-top: 1rem;
  width: 200px;
  height: 350px;
color: aliceblue;
background: linear-gradient(to bottom right, rgb(37, 17, 119), rgb(255, 0, 0)); /* Degradado de fondo */

border-radius: 0rem 2rem;
}

.square-container {
  width: 550px;
  /* Ancho fijo del contenedor del cuadrado */

  display: flex;
  justify-content: center;
  align-items: end;



}

.square {
  width: 300px;
  height: 300px;
  background-color: rgb(136, 198, 136);
  display: flex;
  justify-content: center;
  align-items: center;
}

.red {
  background-color: red !important;
}

salto{

padding-bottom: 1rem;


}

.derecha

{
margin-left: 1rem

}

</style>
