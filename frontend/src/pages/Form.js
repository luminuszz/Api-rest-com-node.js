// Imports
import React, { useState } from 'react'; // Importanto React.js
import './Form.css'// Importando CSS
import './Login.css'
import api from '../services/api';
import { Button } from 'react-bootstrap';
import { Form, FormGroup } from 'react-bootstrap';
import logoAbitat from '../assets/LogoTopo.png';

export default function FormPost({ history }) {

   const [username, setUsername] = useState('');
   const [apelido, setApelido] = useState('');
   const [email , setEmail] = useState('');
   async function submitClick(e) {
      e.preventDefault();

      const data = await api.post('https://jsonplaceholder.typicode.com/posts', {
         username,
         apelido,
         email

      })
      console.log(data.data);

      history.push("/tabela");


   }

   return (
      <div className="login-container">


         <form action="#" onSubmit={submitClick}>
            <img src={logoAbitat} alt="abitat" />
            <input type="text" placeholder="Informe seu Nome"
               value={username}
               onChange={e => setUsername(e.target.value)}

            />

            <input type="text" placeholder="Informe seu Apelido"
               value={apelido}
               onChange={e => setApelido(e.target.value)} />

            <input type="text" placeholder="Informe seu Email"
               value={email}
               onChange={e => setEmail(e.target.value)} />



            <button>Enviar</button>



         </form>
      </div>
   )

}
