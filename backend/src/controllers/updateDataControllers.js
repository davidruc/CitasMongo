import { updateAcudiente } from "../services/updateServices.js";

const updateAcudienteController = async(req, res, next)=>{
    try {
        const data = req.body;
        const {id} = req.query;
        const acudiente = await updateAcudiente(id, data);
        res.status(201).send(acudiente);
    } catch (error) {
        res.status(500).send(error)
    }
}

export {updateAcudienteController}