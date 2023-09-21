import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const URL = 'http://localhost:3000/api/user/'

const EditUser = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const {id} = useParams();

    //metodo para actualizar
    const updateUser = async (e) => {
        e.preventDefault();
        await axios.put(URL+id, {
            username,
            password,
            email
        })
        navigate('/')
    }

    
    useEffect(() => {

        getUserById()

    }, [])

    const getUserById = async () => {
        const res = await axios.get(URL+id);
        setUsername(res.data.users)
        setPassword(res.data.users)
        setEmail(res.data.users)
        console.log(res)
    }



    return (
        <div className='container'>
            <h3>Editar User</h3>
            <form onSubmit={updateUser}>
                <div className='mb-3'>
                    <label className="form-label">Nombre</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Contraseña</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar y guardar</button>
            </form>
        </div>
    )
}

export default EditUser