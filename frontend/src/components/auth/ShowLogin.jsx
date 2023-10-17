import axios from 'axios';
import '../styles/LoginStyles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShowLogin = () => {

    const URL = 'http://localhost:3000/api/login'

    //manejo de estados para los campos del formulario
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();



    //HECHO
    const loginUser = async (e) => {

        try {

           e.preventDefault();
            const data = await axios.post(URL, { email,password});
            console.log(data.data);
            if(!data.data.userFound){
                console.log('acceso restringido')
            }
            else{
                navigate('/inicio')
            }
           
           
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="container">
            <h3 className="text-center mt-4">Iniciar Sesion</h3>
            <form className="form py-4" onSubmit={loginUser}>

                <div className="form-group mb-4">
                    <label  className='label'>Correo Electronico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Ingrese su mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </div>


                <div className="form-group mb-3">
                    <label  className='label'>Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Ingrese su contraseña" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                </div>
                <button type="submit" className="btn btn-primary botoncito">Iniciar Sesion</button>
               
            </form>
        </div>

    )
}

export default ShowLogin