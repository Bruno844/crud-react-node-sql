import axios from 'axios';
import '../styles/LoginStyles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowSignUp = () => {

    const URL = 'http://localhost:3000/api/register'

    //manejo de estados para los campos del formulario
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const createRegister = async (e) => {

        e.preventDefault();
        await axios.post(URL, {email: email, password: password})
        //console.log({email: email, password: password});
        navigate('/inicio')

    }




    return (
        <div className="container">
            <h3 className="text-center mt-4">Registro de usuario</h3>
            <form className="form py-4" onSubmit={createRegister}>

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
                <button type="submit" className="btn btn-primary botoncito">Registrarse</button>
                <Link to={`/iniciosesion`} className='btn btn-info'>Tiene una cuenta? Inicie sesion</Link>

            </form>
        </div>

    )
}

export default ShowSignUp