import axios from 'axios';
import '../styles/PublishStyle.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const URL = 'http://localhost:3000/api/publishes/'




const ShowPublishByUser = () => {


  const [publishes, setPublishes] = useState([])

 const {id} = useParams()

  useEffect(() => {

    getPublishByuser(); //al renderizar la aplicacion, muestre los datos traidos de esa funcion

  }, [])

    //metodo para mostrar todas las publicaciones
    const getPublishByuser = async () => {

        //ANALIZAR ESTE COMPONENTE
        //FUNCIONA, NO LO TOQUES MAS!!
        //const id_publish = await axios.get(URL_PUBLISH + id);
        const res = await axios.get(URL+id);
        setPublishes(res.data.publish) //seteo los datos hacia un nuevo estado

        console.log(res.data)


      

    }



  return (
    <>
      <div className='container px-4 mt-5 text-center'>
        <div className='row gx-5 '>
          <div className='col'>
            {publishes.map((publish) => (

              <div className="card" key={publish.id}>
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{publish.description}</h5>
                  <p className="card-text">{publish.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </>



  )
}

export default ShowPublishByUser