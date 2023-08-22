import { obtenerAcudientesById, obtenerAllAcudientes } from "../services/getServices.js";

const obtenerAllAcudientesController = async (req, res, next)=>{
    try {
        const acudiente = await obtenerAllAcudientes();
        res.status(200).send(acudiente);
    } catch (error) {
        res.send(error)
    }
}
const obtenerAcudientesByIdController = async (req, res, next)=>{
    try {
        const {id} = req.query;
        const acudiente = await obtenerAcudientesById(id);
        res.status(200).send(acudiente)
    } catch (error) {
        res.status(500).send(error);
    }
}

export {obtenerAllAcudientesController, obtenerAcudientesByIdController}