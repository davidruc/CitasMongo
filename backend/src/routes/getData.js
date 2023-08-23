import { Router } from "express";
import { obtenerAllAcudientesController, obtenerAllCitaController, obtenerAllConsultorioController, obtenerAllEspecialidadController, obtenerAllEstadoCitaController, obtenerAllGeneroController, obtenerAllMedicoController, obtenerAllTipoDocController, obtenerAllUsuarioController, obtenerAcudientesByIdController, obtenerCitaByIdController, obtenerConsultorioByIdController, obtenerEspecialidadByIdController, obtenerEstadoCitaByIdController, obtenerGeneroByIdController, obtenerMedicoByIdController, obtenerTipoDocByIdController, obtenerUsuarioByIdController } from "../controllers/getDataControllers.js";

const getInitRoute = ()=>{
    const router = Router();
    router.get("/acudientes", obtenerAllAcudientesController);
    router.get("/citas", obtenerAllCitaController);
    router.get("/consultorios", obtenerAllConsultorioController);
    router.get("/especialidades", obtenerAllEspecialidadController);
    router.get("/estadoCitas", obtenerAllEstadoCitaController);
    router.get("/generos", obtenerAllGeneroController);
    router.get("/medicos", obtenerAllMedicoController);
    router.get("/tipoDocumentos", obtenerAllTipoDocController);
    router.get("/usuarios", obtenerAllUsuarioController);
    router.get("/acudiente", obtenerAcudientesByIdController);
    router.get("/cita", obtenerCitaByIdController);
    router.get("/consultorio", obtenerConsultorioByIdController);
    router.get("/especialidad", obtenerEspecialidadByIdController);
    router.get("/estadoCita", obtenerEstadoCitaByIdController);
    router.get("/genero", obtenerGeneroByIdController);
    router.get("/medico", obtenerMedicoByIdController);
    router.get("/tipoDocumento", obtenerTipoDocByIdController);
    router.get("/usuario", obtenerUsuarioByIdController);


    return router;
}

export default getInitRoute