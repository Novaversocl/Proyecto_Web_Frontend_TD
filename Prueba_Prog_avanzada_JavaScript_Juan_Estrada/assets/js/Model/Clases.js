export class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

  get img() {
    return this._img;
  }

  set img(nuevaImg) {
    this._img = nuevaImg;
  }

  get comentarios() {
    return this._comentarios;
  }

  set comentarios(nuevosComentarios) {
    this._comentarios = nuevosComentarios;
  }

  get sonido() {
    return this._sonido;
  }

  set sonido(nuevoSonido) {
    this._sonido = nuevoSonido;
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {}
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Aullar() {}
  }
  
  export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Gruñir() {}
  }

  export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
   Sisear() {}
  }

  export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
   Chillar() {}
  }
  
  
