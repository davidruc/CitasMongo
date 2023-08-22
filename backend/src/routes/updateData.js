import { Router } from "express";
import { updateAcudienteController } from "../controllers/updateDataControllers.js";

const putInitRoute = ()=>{
    const router = Router();
    router.put("/acudiente", updateAcudienteController);
    return router;
}
export default putInitRoute;
