import { Router } from "express";
import { postAcudienteController, postCitaController, postConsultorioController, postEspecialidadController, postEstadoCitaController, postGeneroController, postMedicoController, postTipoDocController, postUsuarioController } from "../controllers/postDataControllers.js";

const postInitRoute = ()=>{
    const router = Router();
    router.post("/acudiente", postAcudienteController);
    router.post("/cita", postCitaController);
    router.post("/consultorio", postConsultorioController);
    router.post("/especialidad", postEspecialidadController);
    router.post("/estadoCita", postEstadoCitaController);
    router.post("/genero", postGeneroController);
    router.post("/medico", postMedicoController);
    router.post("/tipoDocumento", postTipoDocController);
    router.post("/usuario", postUsuarioController);
    return router;
}

export default postInitRoute;