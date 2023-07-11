// Vamos a importar dos funciones de la libreria Firebase
import { initializeApp } from "firebase/app"; // Inicia la conexion con Firebase
import { getFirestore } from "firebase/firestore"; // obtiene una instancia de Firebase


// Aca esatmos traajando con un objeto que tiene toda nuestra informacion de la cuenta
// Tiene la apiKey personal de acceso a la base de datos (BD)
const firebaseConfig = {
  apiKey: "AIzaSyChTAYaUiqkyly_CUnpxcw86dFPfz7XIG8",
  authDomain: "primer-proyecto-7ad4f.firebaseapp.com",
  projectId: "primer-proyecto-7ad4f",
  storageBucket: "primer-proyecto-7ad4f.appspot.com",
  messagingSenderId: "781300784584",
  appId: "1:781300784584:web:d42acfa08f0f14a66534fd"
};

// Se inicializa FireBase y se pasa la configuracion como parametro. Esto me devuelve una instancia de FireBase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Exportamos esta referencia para que este disponible en toda la aplicacion