import { Acudiente } from "../entities/acudiente.js";
import { Cita } from "../entities/cita.js";
import { Consultorio } from "../entities/consultorio.js";
import { Especialidad } from "../entities/especialidad.js";
import { EstadoCita } from "../entities/estado_cita.js";
import { Genero } from "../entities/genero.js";
import { Medico } from "../entities/medico.js";
import { TipoDoc } from "../entities/tipo_documento.js";
import { Usuario } from "../entities/usuario.js"

const deleteAcudiente = async(id)=>{
    const acudiente = new Acudiente();
    return await acudiente.deleteAcudiente(id)
}
const deleteCita = async (id)=>{
    const cita = new Cita();
    return await cita.deleteCita(id)
}

const deleteConsultorio = async (id)=>{
    const consultorio = new Consultorio();
    return await consultorio.deleteConsultorio(id)
}

const deleteEspecialidad = async (id)=>{
    const especialidad = new Especialidad();
    return await especialidad.deleteEspecialidad(id)
}
const deleteEstadoCita = async (id)=>{
    const estadiCita = new EstadoCita();
    return await estadiCita.deleteEstadoCita(id)
}

const deleteGenero = async (id)=>{
    const genero = new Genero();
    return await genero.deleteGenero(id)
}

const deleteMedico = async (id)=>{
    const medico = new Medico();
    return await medico.deleteMedico(id)
}

const deleteTipoDoc = async (id)=>{
    const tipoDoc = new TipoDoc();
    return await tipoDoc.deleteTipoDoc(id)
}

const deleteUsuario = async (id)=>{
    const usuario = new Usuario();
    return await usuario.deleteUsuario(id)
}
export {deleteAcudiente, deleteCita, deleteConsultorio, deleteEspecialidad, deleteEstadoCita, deleteGenero, deleteMedico, deleteTipoDoc, deleteUsuario}
