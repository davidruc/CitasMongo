import { Router } from "express";
import  * as controller  from "../controllers/getDataControllers.js";
import passportHelper from "../helpers/passportHelper.js";
import routesVersioning  from 'express-routes-versioning';
const getInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.get("/acudientes", version({ 
        "^1.0.0": controller.obtenerAllAcudientesController,
        "^2.0.0": controller.obtenerAllAcudientesController,
        "~3.0.0": controller.NotAccessAllowed }));
    router.get("/citas", version({ 
        "^1.0.0": controller.obtenerAllCitaController,
        "2.0.0": controller.obtenerAllCitaController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/consultorios", version({ 
        "^1.0.0": controller.obtenerAllConsultorioController,
        "^2.0.0": controller.obtenerAllConsultorioController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/especialidades", version({ 
        "^1.0.0": controller.obtenerAllEspecialidadController,
        "^2.0.0": controller.obtenerAllEspecialidadController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/estadoCitas", version({ 
        "^1.0.0": controller.obtenerAllEstadoCitaController,
        "^2.0.0": controller.obtenerAllEstadoCitaController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/generos", version({ 
        "^1.0.0": controller.obtenerAllGeneroController,
        "^2.0.0": controller.obtenerAllGeneroController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/medicos", version({ 
        "^1.0.0": controller.obtenerAllMedicoController,
        "^2.0.0": controller.obtenerAllMedicoController,
        "3.0.0": controller.NotAccessAllowed })); 
    router.get("/tipoDocumentos", version({ 
        "^1.0.0": controller.obtenerAllTipoDocController,
        "^2.0.0": controller.obtenerAllTipoDocController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/usuarios", version({ 
        "^1.0.0": controller.obtenerAllUsuarioController,
        "^2.0.0": controller.obtenerAllUsuarioController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/acudiente", version({ 
        "^1.0.0": controller.obtenerAcudientesByIdController,
        "^2.0.0": controller.obtenerAcudientesByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/cita", version({ 
        "^1.0.0": controller.obtenerCitaByIdController,
        "^2.0.0": controller.obtenerCitaByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/consultorio", version({ 
        "^1.0.0": controller.obtenerConsultorioByIdController,
        "^2.0.0": controller.obtenerConsultorioByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/especialidad", version({ 
        "^1.0.0": controller.obtenerEspecialidadByIdController,
        "^2.0.0": controller.obtenerEspecialidadByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/estadoCita", version({ 
        "^1.0.0": controller.obtenerEstadoCitaByIdController,
        "^2.0.0": controller.obtenerEstadoCitaByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/genero", version({ 
        "^1.0.0": controller.obtenerGeneroByIdController,
        "^2.0.0": controller.obtenerGeneroByIdController,
        "3.0.0": controller.NotAccessAllowed })); 
    router.get("/medico", version({ 
        "^1.0.0": controller.obtenerMedicoByIdController,
        "^2.0.0": controller.obtenerMedicoByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/tipoDocumento", version({ 
        "^1.0.0": controller.obtenerTipoDocByIdController,
        "^2.0.0": controller.obtenerTipoDocByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/usuario", version({ 
        "1.0.0": controller.obtenerUsuarioByIdController,
        "^2.0.0": controller.obtenerUsuarioByIdController,
        "3.0.0": controller.NotAccessAllowed }));
    router.get("/especialidadName", version({ "3.0.0": controller.obtenerEspecialidadByNameController}));  
    router.get("/pacientesMedico", version({ "3.0.0": controller.obtenerPacientesMedicosController}));
    router.get("/citasByPaciente", version({ "3.0.0": controller.obtenerCitasPacienteController}));
    router.get("/consultoriosMed", version({ "3.0.0": controller.obtenerConsultoriosMedicosController}))
    router.get("/citaConsultorio", version({ "3.0.0": controller.obtenerConsultoriosCitasController}));
    router.get("/citasByGenero",version({ "3.0.0": controller.obtenerCitasGenController}));
    router.get("/citaByFecha", version({ "3.0.0": controller.obtenerCitaByFechaController}));
    router.get("/numCitasByDay", version({ "3.0.0": controller.obtenerNumeroCitasByDiaController}));
    router.get("/citasByPlazos",version({ "3.0.0": controller.obtenerCitasPlazosController}))
    return router; 
}
/* esto está mal, esto debo hacerlo en mi router, debo tener varios getInitRoute para cada versión del proyecto, así puedo sementarlo por métodos y no queda tan feo  */
export default getInitRoute