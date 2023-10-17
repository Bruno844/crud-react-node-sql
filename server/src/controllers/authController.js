import Register from "../models/registerModel.js";
import jwt from 'jsonwebtoken';
import config from '../config.js';
import bcrypt from 'bcryptjs';



export const registerUser = async (req, res) => {

    const { email, password } = req.body

    try {
        
        const user_register = await Register.create({email, password});

        const salt = 10;
        const hashPassword = await bcrypt.hash(password, salt);
    
        if(!hashPassword){
            res.status(400).json({msg: 'error al encriptar contraseña'})
        }

        const token = jwt.sign({id: user_register.id }, config.SECRET,{
            expiresIn: 86400 //24 horas en segundo
        })

        res.status(201).json({
            ok: true,
            user_register,
            token,
            hashPassword
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
        const userFound = await Register.findOne({
            where: {password: password, email: email},


        })
        if(!userFound) {
            return res.json({message: 'usuario no encontrado'})
        }

        //comparar contraseña
        //const matchPassword = bcrypt.compare(password, userFound.password );

        //if(!matchPassword){
            //return res.status(401).json({message: 'contraseña invalida'})
        //}

        //token
        //const token = await jwt.sign({id: userFound.id}, config.SECRET, {
            //expiresIn: 84600
        //})

        res.status(200).json({
            msg: 'inicio de sesion exitoso',
            userFound
        })

    } catch (error) {
        return res.status(500).json({msg: 'error al iniciar sesion'})
    }

}



