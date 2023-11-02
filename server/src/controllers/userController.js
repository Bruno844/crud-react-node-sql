
import User from '../models/userModel.js'

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll();
        res.status(200).json({
            users,
            ok: true
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los usuarios',
        })
    }
}


export const getUserById = async (req, res) => {

    const { id } = req.params

    try {

        const user_id = await User.findOne({
            where: {id : id}
        })

        res.status(200).json({
            user_id
        })

        if (!user_id) {
            res.status(400).json({
                msg: 'no existe id '
            })
        }

    } catch (error) {
        res.status(400).json({ msg: 'no existe usuario' })
    }


}

export const createUser = async (req, res) => {

    const { username, password, email } = req.body

    try {

        const user = await User.create({ username, password, email });
        res.status(201).json({
            ok: true,
            user
        })
        //user.save()
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

export const updateUser = async (req, res) => {

    const { id } = req.params
    const { username, password, email } = req.body

    try {

        const userupdate = await User.update(req.body, {
            where: { id: id }
        })

        res.status(200).json({
            msg: "usuario actualizado",
            userupdate
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

export const deleteUser = async (req, res) => {

    const { id } = req.params;


    try {

        const user = await User.destroy({ where: { id: id } })

        res.status(201).json({
            ok: true,
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}