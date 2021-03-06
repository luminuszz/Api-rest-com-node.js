// Imports
import React, {useState} from 'react'; // Importanto React.js
import logo from '../assets/logo.svg' // Importando logo
import './Login.css'; // Importando CSS
import api from '../services/api';

export default function Login({history}) { // Componente de login
   // Utilzando "export default" na frente da "function " a mesma já ira ser exportada
   // "State" =  "Estado" usado no component para mapear o component
   const [username, setUsername] = useState(''); // Variavel "username" usada para guardar o valor do input
                  // Variavel "setUsername" para monitorar o valor do usuari

 async function handleSubmit(e) { // Function para impedir o submit do formulario
                e.preventDefault();

                  const response = await api.post('/devs',{ // Criando variavel "response" para utlizar a api criada para cadastrar p dev
                     username,

                  });
                  console.log(response);

                history.push('/main'); //  Metodo history direciona a page desejada

          }
   return  ( // Html

      <div className="login-container">


            <form action="#" onSubmit={handleSubmit}>
               <img src={logo} alt="Tinder dlç" />
               <input type="text" placeholder="Informe seu login do git"
               value={username}
               onChange={e => setUsername(e.target.value) }
               />
               <button>Enviar</button>



            </form>
      </div>
   );



}
