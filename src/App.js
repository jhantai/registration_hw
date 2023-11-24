import React from 'react';
import {useState} from "react";
import axios from "axios";
import Login from "./registration/login";

const App = () => {
  const [login, setLogin] = useState
  ({
    username: 'codify',
    password: 'codify'
  })
  const authorization = async () => {
    try {
      const response = await axios.post('https://codify-teens.vercel.app/login/', login)
      const data = await response
      console.log(data)
    }


    catch (e) {
      if (response.status === 401) {
        alert('верный логин и пароль');
      } else if (response.status === 401) {
        alert('неверный логин и пароль');
      } else if (response.status === 400) {
        alert('сервер не работает');
      } else (
          alert('не коректно ввели ')
      )
    }}
    console.log(e.response)
  }
      return (
          <div>
            <input
                onChange={(e) => setLogin(prevState => ({...prevState, username: e.target.value}))}
                type="text"
                placeholder='Логин'
            />
            <input
                onChange={(e) => setLogin(prevState => ({...prevState, password: e.target.value}))}
                type="password"
                placeholder='Пароль'
            />
            <input
                type="button"
                value='Отправить'
                onClick={authorization}/>
          </div>
      )
}





export default App;