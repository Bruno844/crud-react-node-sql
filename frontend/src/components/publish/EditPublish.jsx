import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const URL = 'http://localhost:3000/api/publish/'

const EditPublish = () => {

    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [location, setLocation] = useState('')
    const [userId, setUserId] = useState('')
    const navigate = useNavigate();

    const { id } = useParams();

    //metodo para actualizar
    const updatePublish = async (e) => {
        e.preventDefault();
        await axios.put(URL + id, {
            description: description,
            date: date,
            image: image,
            location: location,
            userId: userId
        })
        navigate('/inicio')
    }


    useEffect(() => {

        getPublishById()

    }, [])

    const getPublishById = async () => {
        const res = await axios.get(URL+id);
        setDescription(res.data.publish_id.description);
        setDate(res.data.publish_id.date);
        setLocation(res.data.publish_id.location);
        setUserId(res.data.publish_id.userId)
        console.log(res.data.publish_id.description)
      
    }



    return (
        <div className='container mt-4'>
            <h3>Crear Publicacion</h3>
            <form onSubmit={updatePublish}>
                <div className='mb-3'>
                    <label className="form-label">Descripcion de la publicacion</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}//capturo los valores dentro del input
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Fecha de publicacion</label>
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Ubicacion</label>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Id del usuario</label>
                    <input
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </form>
        </div>
    )
}

export default EditPublish