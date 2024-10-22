// Importar los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmdxgor1R7kc30LK5zPTib1LUHcRyIPJI",
  authDomain: "fir-app-12593.firebaseapp.com",
  databaseURL: "https://fir-app-12593-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-app-12593",
  storageBucket: "fir-app-12593.appspot.com",
  messagingSenderId: "559149557244",
  appId: "1:559149557244:web:47d36d40dc535b0411be79",
  measurementId: "G-HW08CSW0B1"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
// Obtener una instancia de la base de datos
const database = getDatabase(app);
// Exportar la instancia de la base de datos
export { database };
