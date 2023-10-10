import jwt from 'jsonwebtoken';
import config from '../config.js';
import Register from '../models/registerModel.js';

export const verifyToken = async(req,res,next) => {

    const {email, password} = req.body

    try {

        const token = req.headers['x-access-token'];

        

        if(!token){
            return res.status(401).json({
                msg: 'No token proveido'
            })
        }

        const tokendecode = jwt.verify(token, config.SECRET)
        req.id = tokendecode.id; //compara que los id que vengan de la solicitud, como el que tiene el token relacionado, sean iguales
        
        const user = await Register.findOne({
            where: {email:email, password: password}
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