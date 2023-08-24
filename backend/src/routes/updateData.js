import { Router } from "express";
import { updateAcudienteController, updateCitaController, updateConsultorioController, updateEspecialidadController, updateEstadoCitaController, updateGeneroController, updateMedicoController, updateTipoDocController, updateUsuarioController} from "../controllers/updateDataControllers.js";
import { DTOacudienteData, DTOCitaData, DTOConsultorioData, DTOEspecialidadData, DTOEstadoCitaData, DTOGeneroData, DTOMedicoData, DTODocumentoData, DTOUsuarioData  } from "../middleware/verifyData.js"; 
const putInitRoute = ()=>{
    const router = Router();
    router.put("/acudiente", DTOacudienteData, updateAcudienteController);
    router.put("/cita", DTOCitaData,updateCitaController);
    router.put("/consultorio", DTOConsultorioData,updateConsultorioController);
    router.put("/especialidad",DTOEspecialidadData, updateEspecialidadController);
    router.put("/estadoCita", DTOEstadoCitaData ,updateEstadoCitaController);
    router.put("/genero", DTOGeneroData, updateGeneroController);
    router.put("/medico", DTOMedicoData, updateMedicoController);
    router.put("/tipoDocumento", DTODocumentoData, updateTipoDocController);
    router.put("/usuario", DTOUsuarioData, updateUsuarioController);
    return router;
}
export default putInitRoute;
