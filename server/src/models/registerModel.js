import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config.js';



const Register = sequelize.define('Register_user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})


Register.sync()
.then(() => {
    console.log('La tabla de usuarios registrados ha sido creada');
    /*User.hasMany(Publish, {
        as: 'publishId'
    })*/
    
})
.catch((error) => {
    console.error('Error al crear la tabla de usuarios_register ', error);
});



export default Register;