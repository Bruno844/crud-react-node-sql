import Publish from '../models/publishModel.js'
import User from '../models/userModel.js';

export const getAllPublish = async (req, res) => {

    try {
        const publishes = await Publish.findAll();
        res.status(200).json({
            publishes,
            ok: true
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener las Publicaciones',
        })
    }
}

export const getPublishById = async (req,res) => {

    const {id} = req.params

    try {
    
        const publish_id = await Publish.findOne({
            where: {id: id}
        })

        if(!publish_id) {
            res.status(500).json({
                msg: 'error al obtener publicacion con ese id'
            })
        }

        res.status(200).json({
            publish_id
        })

    } catch (error) {
        res.status(500).json({
            msg: error
        })
    }

}


export const getPublishByUser = async (req,res) => {
    
    const {userId} = req.params
    
    try {
        const publish = await Publish.findAll({
            where: {userId},
            include: {
                model: User,
                attributes: ["username"]
            }
        })

        if(!userId) {
            res.status(500).json({
                message: 'no se encuentra usuario con ese id'
            })
        } else {
            res.status(200).json({
                publish
            })
            
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}




export const createPublish = async (req, res) => {
    try {
        const { descripcion, fecha, hora, imagen, ubicacion, userId } = req.body
        const post = await Publish.create(req.body);
        res.status(201).json({
            ok: true,
            post
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

export const updatePublish = async (req, res) => {
   
    const {id} = req.params
    const {descripcion, fecha, hora, imagen, ubicacion,userId } = req.body

    try {

        const edit_publish = await Publish.update(req.body, {
            where: {id: id  }
        })

        if(!id) {
            res.status(400).json({
                msg: 'no existe la publicacion con ese id'
            })
        }
        else{
            res.status(200).json({
                msg: 'publicacion actualizada',
                edit_publish
            })
        }

    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}

export const deletePublish = async (req, res) => {

    const {id} = req.params;


    try {

        const post = await Publish.destroy({where: {id: id}})

        res.status(201).json({
            ok: true,
            post
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'server error'
        })

    }
}