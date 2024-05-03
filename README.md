# Proyecto_Web_Frontend_TD_2024
Proyecto_Web_Frontend_TD



Babel
npm install -D @babel/core @babel/cli @babel/preset-env

------
babel.config.json
{
    "presets": ["@babel/preset-env"]
}
----
voy al package.json, y dentro de la propiedad scripts creo la propiedad build
 "build": "babel assets/js -d assets/dist"

 npm run build
