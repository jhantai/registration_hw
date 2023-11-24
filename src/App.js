import React from 'react';
import {useState} from "react";
import axios from "axios";
import Login from "./registration/login";
import './App.css'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const App = () => {
  const [login, setLogin] = useState
  ({
    username: '',
    password: ''
  })
  const authorization = async () => {
    try {
      const response = await axios.post('https://codify-teens.vercel.app/login/', login)
      const data = await response
      console.log(data)
    }


    catch (e) {
      if (e.response.status === 200) {
        alert(<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
          <Alert
              action={
                  <Button color="inherit" size="small">
                      UNDO
                  </Button>
              }
          >
              This is a success alert — check it out!
          </Alert>);

      } else if (e.response.status === 401) {
        alert('неверный логин и пароль');
      } else if (e.response.status === 400) {
        alert('сервер не работает');
      } else (
          alert('не коректно ввели ')
      )
        console.log(e.response)
    }}

    return (
        <div className='box'>

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