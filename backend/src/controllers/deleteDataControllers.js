import { deleteAcudiente, deleteCita, deleteConsultorio, deleteEspecialidad, deleteEstadoCita, deleteGenero, deleteMedico, deleteTipoDoc, deleteUsuario } from "../services/deleteServices.js";

const deleteAcudienteController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const acudiente = await deleteAcudiente(id);
        res.status(201).send(acudiente);
    } catch (error) {
        res.status(500).send(error);
    }
};
const deleteCitaController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const cita = await deleteCita(id);
        res.status(201).send(cita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteConsultorioController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const consultorio = await deleteConsultorio(id);
        res.status(201).send(consultorio);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteEspecialidadController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const especialidad = await deleteEspecialidad(id);
        res.status(201).send(especialidad);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteEstadoCitaController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const estadoCita = await deleteEstadoCita(id);
        res.status(201).send(estadoCita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteGeneroController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const genero = await deleteGenero(id);
        res.status(201).send(genero);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteMedicoController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const medico = await deleteMedico(id);
        res.status(201).send(medico);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteTipoDocController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const tipoDoc = await deleteTipoDoc(id);
        res.status(201).send(tipoDoc);
    } catch (error) {
        res.status(500).send(error);
    }
}
const deleteUsuarioController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const usuario = await deleteUsuario(id);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {deleteAcudienteController, deleteCitaController, deleteConsultorioController, deleteEspecialidadController, deleteEstadoCitaController, deleteGeneroController, deleteMedicoController, deleteTipoDocController, deleteUsuarioController};
