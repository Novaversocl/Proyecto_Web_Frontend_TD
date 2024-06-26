// Importa las funciones necesarias de Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes de las vistas
import HomeView from '../views/HomeView.vue';
const AddBookPage = () => import('../views/AddBookPage.vue'); // Importación dinámica para AddBookPage
const EditBookPage = () => import('../views/EditBookPage.vue'); // Importación dinámica para EditBookPage

// Define las rutas de la aplicación
const routes = [
  {
    path: '/', // Ruta de la página principal
    name: 'home',
    component: HomeView // Componente asociado a la ruta principal
  },
  {
    path: '/about', // Ruta de la página "About"
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') // Importación dinámica para AboutView
  },
  {
    path: '/add-book', // Ruta para agregar un libro
    name: 'add-book',
    component: AddBookPage // Componente asociado a la ruta de agregar libro
  },
  {
    path: '/edit-book/:id', // Ruta para editar un libro con parámetro dinámico ":id"
    name: 'edit-book',
    component: EditBookPage, // Componente asociado a la ruta de editar libro
    props: true // Permite pasar props a la ruta para el ID del libro a editar
  }
];

// Crea el enrutador de la aplicación con la configuración proporcionada
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Tipo de historial de navegación
  routes // Rutas definidas para la aplicación
});

// Exporta el enrutador creado para que pueda ser utilizado en otros archivos
export default router;
