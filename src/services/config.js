import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar dos funciones de la librería Firebase.
//initializeApp =  esta función la utilizo para INICIAR LA CONEXIÓN CON FIREBASE.
//getFirestore = se utiliza para obtener una instancia de Firestore.

//Creamos un objeto con toda nuestra información de la cuenta.
// Acá se incluye la key personal de acceso a la BD.

const firebaseConfig = {
  apiKey: "AIzaSyBaEqjuPFfIclKmvj7Um6b2yMcrkyuK1jk",
  authDomain: "tienda-adidas.firebaseapp.com",
  projectId: "tienda-adidas",
  storageBucket: "tienda-adidas.appspot.com",
  messagingSenderId: "1066706310795",
  appId: "1:1066706310795:web:a1f50f344bd9e8d4dde68e",
};

//Inicializamos Firebase y se pasa la configuración como argumento.
//Esto devuelve una instancia de Firebase.

const app = initializeApp(firebaseConfig);

//Uso esa instancia de Firebase para obtener una instancia de Firestore.

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicación.
