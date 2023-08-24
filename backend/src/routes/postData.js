import { Router } from "express";
import { postAcudienteController, postCitaController, postConsultorioController, postEspecialidadController, postEstadoCitaController, postGeneroController, postMedicoController, postTipoDocController, postUsuarioController, postAndVerifyAcudienteController } from "../controllers/postDataControllers.js";
import { DTOacudienteData, DTOCitaData, DTOConsultorioData, DTOEspecialidadData, DTOEstadoCitaData, DTOGeneroData, DTOMedicoData, DTODocumentoData, DTOUsuarioData  } from "../middleware/verifyData.js"; 
const postInitRoute = ()=>{
    const router = Router();
    router.post("/acudiente", DTOacudienteData, postAcudienteController);
    router.post("/cita", DTOCitaData, postCitaController);
    router.post("/consultorio", DTOConsultorioData, postConsultorioController);
    router.post("/especialidad", DTOEspecialidadData, postEspecialidadController);
    router.post("/estadoCita", DTOEstadoCitaData, postEstadoCitaController);
    router.post("/genero", DTOGeneroData, postGeneroController);
    router.post("/medico", DTOMedicoData, postMedicoController);
    router.post("/tipoDocumento", DTODocumentoData, postTipoDocController);
    router.post("/usuario", DTOUsuarioData, postUsuarioController);
    router.post("/ingresoUsu", DTOUsuarioData, postAndVerifyAcudienteController)
    return router;
}

export default postInitRoute;