import { Acudiente } from "../entities/acudiente.js";
import { Cita } from "../entities/cita.js";
import { Consultorio } from "../entities/consultorio.js";
import { Especialidad } from "../entities/especialidad.js";
import { EstadoCita } from "../entities/estado_cita.js";
import { Genero } from "../entities/genero.js";
import { Medico } from "../entities/medico.js";
import { TipoDoc } from "../entities/tipo_documento.js";
import { Usuario } from "../entities/usuario.js"

 
const obtenerAllAcudientes = async ()=>{
    const acudientes = new Acudiente();
    return await acudientes.getAllacudientes();
}
const obtenerAcudientesById = async (id)=>{
    const acudiente = new Acudiente();
    return await acudiente.getAcudientesByID(id)
}
const obtenerAllCita = async ()=>{
    const cita = new Cita();
    return await cita.getAllCitas()
}
const obtenerCitaById = async (id)=>{
    const cita = new Cita();
    return await cita.getCitasByID(id)
}
const obtenerAllConsultorio = async ()=>{
    const consultorio = new Consultorio();
    return await consultorio.getAllConsultorios()
}
const obtenerConsultorioById = async (id)=>{
    const consultorio = new Consultorio();
    return await consultorio.getConsultoriosByID(id)
}
const obtenerAllEspecialidad = async ()=>{
    const especialidad = new Especialidad();
    return await especialidad.getAllEspecialidades()
}
const obtenerEspecialidadById = async (id)=>{
    const especialidad = new Especialidad();
    return await especialidad.getEspecialidadesByID(id)
}
const obtenerAllEstadoCita = async ()=>{
    const estadiCita = new EstadoCita();
    return await estadiCita.getAllEstadoCitas()
}
const obtenerEstadoCitaById = async (id)=>{
    const estadiCita = new EstadoCita();
    return await estadiCita.getEstadoCitasByID(id)
}
const obtenerAllGenero = async ()=>{
    const genero = new Genero();
    return await genero.getAllGeneros()
}
const obtenerGeneroById = async (id)=>{
    const genero = new Genero();
    return await genero.getGenerosByID(id)
}
const obtenerAllMedico = async ()=>{
    const medico = new Medico();
    return await medico.getAllMedicos()
}
const obtenerMedicoById = async (id)=>{
    const medico = new Medico();
    return await medico.getMedicosByID(id)
}
const obtenerAllTipoDoc = async ()=>{
    const tipoDoc = new TipoDoc();
    return await tipoDoc.getAllTipoDocs()
}
const obtenerTipoDocById = async (id)=>{
    const tipoDoc = new TipoDoc();
    return await tipoDoc.getTipoDocsByID(id)
}
const obtenerAllUsuario = async ()=>{
    const usuario = new Usuario();
    return await usuario.getAllUsuarios()
}
const obtenerUsuarioById = async (id)=>{
    const usuario = new Usuario();
    return await usuario.getUsuariosByID(id)
}

const obtenerEspecialidadByName = async (esp)=>{
    const especialidad = new Especialidad();
    return await especialidad.getEspecialidadByName(esp)
}
const obtenerPacientesMedicos = async (id)=>{
    const medico = new Medico(id);
    return await medico.getPacientesMedicos(id);
}
const obtenerCitasPaciente = async (id)=>{
    const usuario = new Usuario(id);
    return await usuario.getCitasPaciente(id);
}
const obtenerConsultoriosMedicos = async()=>{
    const medicos = new Medico();
    return await medicos.getConsultoriosMedicos();
}
const obtenerConsultoriosCitas = async()=>{
    const usuario = new Usuario();
    return await usuario.getConsultoriosCitas();
}
const obtenerCitasGen = async(gen)=>{
    const citas = new Cita();
    return await citas.getCitasGen(gen);
}
const obtenerCitaByFecha = async(date)=>{
    const citas = new Cita();
    return await citas.getCitaByFecha(date);
}
const obtenerNumeroCitasByDia = async(id, date)=>{
    const medico = new Medico();
    return await medico.getNumeroCitasByDia(id, date);
}
const obtenerCitasPlazos = async(month)=>{
    const cita = new Cita();
    return await cita.getCitasPlazos(month);
}
export { obtenerAllAcudientes, obtenerAcudientesById, obtenerAllCita, obtenerCitaById, obtenerAllConsultorio, obtenerConsultorioById, obtenerAllEspecialidad, obtenerEspecialidadById, obtenerAllEstadoCita, obtenerEstadoCitaById, obtenerAllGenero, obtenerGeneroById, obtenerAllMedico, obtenerMedicoById, obtenerAllTipoDoc, obtenerTipoDocById, obtenerAllUsuario, obtenerUsuarioById, obtenerEspecialidadByName, obtenerPacientesMedicos, obtenerCitasPaciente, obtenerConsultoriosMedicos, obtenerConsultoriosCitas, obtenerCitasGen, obtenerCitaByFecha, obtenerNumeroCitasByDia, obtenerCitasPlazos }