import { Model, DataTypes } from 'sequelize';

import sequelize from '../database/config.js';
import User from './userModel.js';


const Publish = sequelize.define('Publish', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   /*// idUser: {
        type: DataTypes.INTEGER,
        forignKey: true, //no se si se define asi una clave foranea xd
        allowNull: false, // si o si la tiene que haber hecho alguien
        unique: false //pueden haber muchos posts de un mismo user
        //idUser es la clave primaria en usuarios que tiene que estar vinculada con posteos
    },*/
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})


Publish.sync()
.then(() => {
    console.log('La tabla de Publicaciones ha sido creada');
    /*Publish.belongsTo(User,{
        foreignKey: 'userId'
    })*/
       
        
})
.catch((error) => {
     console.error('Error al crear la tabla de Publicaciones: ', error);
});
    

export default Publish;