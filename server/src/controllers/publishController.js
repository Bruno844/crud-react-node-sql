import Publish from '../models/publishModel.js'
import User from '../models/userModel.js';

export const getAllPublish = async (req, res) => {

    try {
        const posts = await Publish.findAll();
        res.status(200).json({
            posts,
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

export const getPublishByUser = async (req,res) => {
    
    const {id} = req.params
    
    try {
        const publish = await Publish.findOne({
            where: {id},
            include: {
                model: User,
                attributes: ["username", "password"]
            }
        })
        res.status(200).json({
            publish
        })
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}




export const createPublish = async (req, res) => {
    try {
        const { descripcion, fecha, hora, imagen, ubicacion } = req.body
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
    const {descripcion, fecha, hora, imagen, ubicacion } = req.body

    try {

        const post = await Publish.findOne({id});

        if(post){
            post.update({descripcion, fecha, hora, imagen, ubicacion })
        }
        else{
            res.status(404).json({
                msg: "no existe publicacion con ese id"
            })
        }

        res.status(200).json({
            msg: "se actualizo la publicacion",
            post
        })


    
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