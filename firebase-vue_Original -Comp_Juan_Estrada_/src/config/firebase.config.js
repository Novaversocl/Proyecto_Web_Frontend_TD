// Importa la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
// Importa la función para obtener la instancia de Firestore
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase con las variables del entorno
const firebaseConfig = {
  // Clave API para la autenticación con Firebase (se obtiene de las variables de entorno)
  apiKey: process.env.VUE_APP_API_KEY_FB, // El llamado de Vite a los env es: import.meta.env.VITE_NOMBRE_VARIABLE
  // Dominio de autenticación para la aplicación de Firebase
  authDomain: "",
  // ID del proyecto de Firebase
  projectId: "",
  // URL del bucket de almacenamiento de Firebase
  storageBucket: "",
  // ID del remitente de mensajes de Firebase
  messagingSenderId: "",
  // ID de la aplicación de Firebase
  appId: "",
};

// Inicializa la aplicación de Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore a partir de la aplicación inicializada
const db = getFirestore(app);

// Exporta la instancia de Firestore para que pueda ser utilizada en otros archivos
export { db };
