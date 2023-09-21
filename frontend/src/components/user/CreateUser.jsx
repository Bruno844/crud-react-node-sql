import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://localhost:3000/api/user'


const CreateUser = () => {

    //manejo de estados para los campos del formulario
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();


    //metodo de guardar
    const saveUser = async (e) => {
        e.preventDefault()
        await axios.post(URL, {username: username,password: password, email:  email})
        navigate('/')//una vez guardado los datos, te regresa a la pagina principal
    }
 
  return (
        <div className='container mt-4'>
            <h3>Crear Usuario</h3>
            <form  onSubmit={saveUser}>
                <div className='mb-3'>
                    <label className="form-label">Nombre</label>
                    <input 
                        value={username}
                        onChange={(e) => setUsername(e.target.value) }//capturo los valores dentro del input
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Contraseña</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Email</label>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
  )
}

export default CreateUser