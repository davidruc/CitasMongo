import { deleteAcudiente } from "../services/deleteServices.js";

const deleteAcudienteController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const acudiente = await deleteAcudiente(id);
        res.status(201).send(acudiente);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {deleteAcudienteController};
