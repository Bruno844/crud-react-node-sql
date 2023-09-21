import express, { json } from 'express'

const app = express()

import sequelize from './src/database/config.js'

import userRoutes from './src/routes/userRoutes.js'
import publishRoutes from './src/routes/publishRoutes.js'

import cors from 'cors'



// config de la DB
sequelize.authenticate()
.then(()=>{
    console.log('Conexion exitosa a la BD')
})
.catch((error)=>{
    console.log('error al conectar con la BD', error)
})

//middlewares (serializacion de informacion a json)
app.use(express.json())
app.use(cors());


//config de rutas
app.use('/api', userRoutes);
app.use('/api', publishRoutes);
//http://localhost:3000/api/...

// iniciar el servidor
const PORT = 3000;
app.listen(PORT, ()=>console.log(`Servidor corriendo en puerto ${PORT}`))
