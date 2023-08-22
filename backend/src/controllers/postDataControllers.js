import { postAcudiente } from "../services/postServices.js";

const postAcudienteController = async(req, res, next)=>{
    try {
        const data = req.body;
        const acudiente = await postAcudiente(data);
        res.status(201).send(acudiente)
    } catch (error) {
        res.status(500).send(error);
    }
}

export {postAcudienteController}