import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//ruta para agregar nueva publicacion
const URL = 'http://localhost:3000/api/publish'


const CreatePublish = () => {

    //manejo de estados para los campos del formulario
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')
    const [userId , setUserId] = useState('')
    const navigate = useNavigate();


    //metodo de guardar
    const savePublish = async (e) => {
        e.preventDefault()
        await axios.post(URL, {
            description: description,
            date: date,
            image: image,
            location: location,
            userId: userId
        })
        navigate('/inicio')//una vez guardado los datos, te regresa a la pagina principal
    }
 
  return (
        <div className='container mt-4'>
            <h3>Crear Publicacion</h3>
            <form  onSubmit={savePublish}>
                <div className='mb-3'>
                    <label className="form-label">Descripcion de la publicacion</label>
                    <input 
                        value={description}
                        onChange={(e) => setDescription(e.target.value) }//capturo los valores dentro del input
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Fecha de publicacion</label>
                    <input 
                        value={date}
                        onChange={(e) => setDate(e.target.value) }
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Ubicacion</label>
                    <input 
                        value={location}
                        onChange={(e) => setLocation(e.target.value) }
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Id del usuario</label>
                    <input 
                        value={userId}
                        onChange={(e) => setUserId(e.target.value) }
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
  )
}

export default CreatePublish