import { Router } from "express";
import * as controller from "../controllers/updateDataControllers.js";
import * as DTO from "../middleware/verifyData.js"; 
import passportHelper from "../helpers/passportHelper.js";
import routesVersioning  from 'express-routes-versioning';
const putInitRoute = ()=>{
    const router = Router();
    const version = routesVersioning();
    router.use(passportHelper.authenticate("bearer", {session: false}));
    router.put("/acudiente", DTO.DTOacudienteData, version({ 
            "^1.0.0": controller.updateAcudienteController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/cita", DTO.DTOCitaData, version({ 
            "^1.0.0": controller.updateCitaController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/consultorio", DTO.DTOConsultorioData,version({ 
            "^1.0.0": controller.updateConsultorioController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/especialidad",DTO.DTOEspecialidadData, version({ 
            "^1.0.0": controller.updateEspecialidadController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/estadoCita", DTO.DTOEstadoCitaData ,version({ 
            "^1.0.0": controller.updateEstadoCitaController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/genero", DTO.DTOGeneroData, version({ 
            "^1.0.0": controller.updateGeneroController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/medico", DTO.DTOMedicoData, version({ 
            "^1.0.0": controller.updateMedicoController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/tipoDocumento", DTO.DTODocumentoData, version({ 
            "^1.0.0": controller.updateTipoDocController,
            "2.0.0": controller.NotAccessAllowed
        }));
    router.put("/usuario", DTO.DTOUsuarioData, version({ 
            "^1.0.0": controller.updateUsuarioController,
            "2.0.0": controller.NotAccessAllowed
        }));
    return router;
}
export default putInitRoute;
