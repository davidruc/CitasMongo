import { Router } from "express";
import { updateAcudienteController, updateCitaController, updateConsultorioController, updateEspecialidadController, updateEstadoCitaController, updateGeneroController, updateMedicoController, updateTipoDocController, updateUsuarioController} from "../controllers/updateDataControllers.js";

const putInitRoute = ()=>{
    const router = Router();
    router.put("/acudiente", updateAcudienteController);
    router.put("/cita", updateCitaController);
    router.put("/consultorio", updateConsultorioController);
    router.put("/especialidad", updateEspecialidadController);
    router.put("/estadoCita", updateEstadoCitaController);
    router.put("/genero", updateGeneroController);
    router.put("/medico", updateMedicoController);
    router.put("/tipoDocumento", updateTipoDocController);
    router.put("/usuario", updateUsuarioController);
    return router;
}
export default putInitRoute;
