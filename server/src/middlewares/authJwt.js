import jwt from 'jsonwebtoken';
import config from '../../config.js';
import User from '../models/userModel.js';

export const verifyToken = async(req,res,next) => {

    const {email, password} = req.body

    try {

        const token = req.headers['x-access-token'];

        

        if(!token){
            return res.status(401).json({
                msg: 'No token proveido'
            })
        }

        const decoded = jwt.verify(token, config.SECRET)
        req.id = decoded.id; //compara que los id que vengan de la solicitud, como el que tiene el token relacionado, sean iguales
        
        const user = await User.findOne({
            where: {email:email}
        })
        if(!user){
            return res.status(404).json({
                msg: 'usuario no encontrado'
            })
        }

        next()


    } catch (error) {
        return res.status(500).json({message: 'Unauthorized'})
    }


}