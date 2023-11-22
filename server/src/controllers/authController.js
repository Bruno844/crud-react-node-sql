
import jwt from 'jsonwebtoken';
//import config from '../config.js';
import config from '../../config.js'
import bcrypt from 'bcryptjs';
import User from "../models/userModel.js";



export const registerUser = async (req, res) => {

    const { username,email, password } = req.body

    try {

        const salt = 10;
        const hashPassword = await bcrypt.hash(password, salt);

        //const user_register = await Register.create({email, password});
        const user_register = await User.create({username,email,password: hashPassword})

    
        if(!hashPassword){
            res.status(400).json({msg: 'error al encriptar contraseña'})
        }

        // const token = jwt.sign({id:user_register.id}, config.SECRET, {
        //     expiresIn: 86400 //24h
        // })

       
        res.status(201).json({
            ok: true,
            user_register,
        })
       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}



export const loginUser = async (req, res) => {

    const {email, password} = req.body;

    try {
        

        //buscando un usuario en la base de datos
        const userFound = await User.findOne({
            where: {email: email}


        })
        //en caso que no coincidan, lance un error 500 que no se encontro el usuario
        if (!userFound) return res.status(500).json({ msg: 'Email Not Found' })

        //aca comprobamos si la contraseña que ingresa es la misma que este en la base
        //const matchPassword = await bcrypt.compare(password, userFound.password)

        //si la contraseña no coincide, lance un error 500 diciendo que la contraseña es invalida
        //if (!matchPassword) return res.status(500).json({ msg: 'invalid password' })

        const token = jwt.sign({id: userFound.id }, config.SECRET,{
            expiresIn: 86400 //24 horas en segundo
        })

        res.status(200).json({
            msg: 'Login Success',
            userFound,
            token
            
        })

    } catch (error) {
        return res.status(500).json({msg: 'error al iniciar sesion'})
    }

}



