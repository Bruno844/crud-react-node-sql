import Register from "../models/registerModel.js";


export const checkDuplicatedEmail = async (req, res, next) => {

    const {email,password} = req.body;

    try {
        const user = await Register.findOne({
            where: {email: email}
        });
        if(user) {
            return res.status(400).json({
                message: "el correo ya esta en uso"
            })
        }

        next();

      
    } catch (error) {
        res.status(500).json({message: error})
    }

    
}