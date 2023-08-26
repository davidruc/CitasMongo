import { obtenerAllAcudientes, obtenerAcudientesById, obtenerAllCita, obtenerCitaById, obtenerAllConsultorio, obtenerConsultorioById, obtenerAllEspecialidad, obtenerEspecialidadById, obtenerAllEstadoCita, obtenerEstadoCitaById, obtenerAllGenero, obtenerGeneroById, obtenerAllMedico, obtenerMedicoById, obtenerAllTipoDoc, obtenerTipoDocById, obtenerAllUsuario, obtenerUsuarioById, obtenerEspecialidadByName, obtenerPacientesMedicos, obtenerCitasPaciente, obtenerConsultoriosMedicos, obtenerConsultoriosCitas, obtenerCitasGen,obtenerCitaByFecha, obtenerNumeroCitasByDia, obtenerCitasPlazos } from "../services/getServices.js";

const obtenerAllAcudientesController = async (req, res, next)=>{
    try {
        const acudiente = await obtenerAllAcudientes();
        res.status(200).send(acudiente);
    } catch (error) {
        res.send(error)
    }
}
const obtenerAllCitaController = async(req, res, next)=>{
    try {
        const cita = await obtenerAllCita();
        res.status(201).send(cita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllConsultorioController = async(req, res, next)=>{
    try {
        const consultorio = await obtenerAllConsultorio();
        res.status(201).send(consultorio);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllEspecialidadController = async(req, res, next)=>{
    try {
        const especialidad = await obtenerAllEspecialidad();
        res.status(201).send(especialidad);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllEstadoCitaController = async(req, res, next)=>{
    try {
        const estadoCita = await obtenerAllEstadoCita();
        res.status(201).send(estadoCita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllGeneroController = async(req, res, next)=>{
    try {
        const genero = await obtenerAllGenero();
        res.status(201).send(genero);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllMedicoController = async(req, res, next)=>{
    try {
        const medico = await obtenerAllMedico();
        res.status(201).send(medico);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllTipoDocController = async(req, res, next)=>{
    try {
        const tipoDoc = await obtenerAllTipoDoc();
        res.status(201).send(tipoDoc);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerAllUsuarioController = async(req, res, next)=>{
    try {
        const usuario = await obtenerAllUsuario();
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send(error);
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
const obtenerCitaByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const cita = await obtenerCitaById(id);
        res.status(201).send(cita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerConsultorioByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const consultorio = await obtenerConsultorioById(id);
        res.status(201).send(consultorio);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerEspecialidadByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const especialidad = await obtenerEspecialidadById(id);
        res.status(201).send(especialidad);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerEstadoCitaByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const estadoCita = await obtenerEstadoCitaById(id);
        res.status(201).send(estadoCita);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerGeneroByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const genero = await obtenerGeneroById(id);
        res.status(201).send(genero);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerMedicoByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const medico = await obtenerMedicoById(id);
        res.status(201).send(medico);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerTipoDocByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const tipoDoc = await obtenerTipoDocById(id);
        res.status(201).send(tipoDoc);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerUsuarioByIdController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const usuario = await obtenerUsuarioById(id);
        res.status(201).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerEspecialidadByNameController = async(req, res, next)=>{
    try {
        const {esp} = req.query;
        const especialidad = await obtenerEspecialidadByName(esp)
        res.status(200).send(especialidad);
    } catch (error) {
        res.status(500).send(error);
    }
};
const obtenerPacientesMedicosController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const medicos = await obtenerPacientesMedicos(id)
        res.status(200).send(medicos);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerCitasPacienteController = async(req, res, next)=>{
    try {
        const {id} = req.query;
        const usuario = await obtenerCitasPaciente(id);
        res.status(200).send(usuario);
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerConsultoriosMedicosController = async(req, res, next)=>{
    try {
        const medico = await obtenerConsultoriosMedicos();
        res.status(200).send(medico)
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerConsultoriosCitasController = async(req, res, next)=>{
    try {
        const usuario = await obtenerConsultoriosCitas();
        res.status(200).send(usuario)
    } catch (error) {
        res.status(500).send(error);
    }
}
const obtenerCitasGenController = async(req, res, next)=>{
    try {
        const {gen} = req.query;
        const citas = await obtenerCitasGen(gen);
        res.status(200).send(citas);
    } catch (error) {
        res.status(500).send(error)
    }
}
const obtenerCitaByFechaController = async(req, res, next)=>{
    try {
        const {date}= req.query;
        const citas = await obtenerCitaByFecha(date);
        res.status(200).send(citas);
    } catch (error) {
        res.status(500).send(error)
    }
}
const obtenerNumeroCitasByDiaController = async(req, res, next)=>{
    try {
        const {id, date} = req.query;
        const medico = await obtenerNumeroCitasByDia(id, date)
        res.status(200).send(medico);
    } catch (error) {
        res.status(500).send(error)
    }
}
const obtenerCitasPlazosController = async(req,res,next)=>{
    try {
        const {month} = req.query;
        const medico = await obtenerCitasPlazos(month);
        res.status(200).send(medico)
    } catch (error) {
        res.status(500).send(error)
    }
}
const NotAccessAllowed = async(req, res, next)=>{
    res.status(404).send({message: "Este endPoint no se encuentra disponible en esta versión de la api"})
}
export {NotAccessAllowed,obtenerAllAcudientesController, obtenerAllCitaController, obtenerAllConsultorioController, obtenerAllEspecialidadController, obtenerAllEstadoCitaController, obtenerAllGeneroController, obtenerAllMedicoController, obtenerAllTipoDocController, obtenerAllUsuarioController, obtenerAcudientesByIdController, obtenerCitaByIdController, obtenerConsultorioByIdController, obtenerEspecialidadByIdController, obtenerEstadoCitaByIdController, obtenerGeneroByIdController, obtenerMedicoByIdController, obtenerTipoDocByIdController, obtenerUsuarioByIdController, obtenerEspecialidadByNameController, obtenerPacientesMedicosController, obtenerCitasPacienteController,obtenerConsultoriosMedicosController, obtenerConsultoriosCitasController, obtenerCitasGenController,
obtenerCitaByFechaController, obtenerNumeroCitasByDiaController, obtenerCitasPlazosController}