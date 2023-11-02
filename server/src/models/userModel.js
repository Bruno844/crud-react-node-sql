import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config.js';
import Publish from './publishModel.js';


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

User.hasMany(Publish, {
    foreignKey: "userId",
    sourceKey: "id",
})

Publish.belongsTo(User, {
    foreignKey: "userId",
    targetKey: "id",
})





User.sync()
.then(() => {
    console.log('La tabla de usuarios ha sido creada');
    /*User.hasMany(Publish, {
        as: 'publishId'
    })*/
    
})
.catch((error) => {
    console.error('Error al crear la tabla de usuarios: ', error);
});



export default User;