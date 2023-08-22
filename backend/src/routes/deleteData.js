import { Router } from "express";
import { deleteAcudienteController } from "../controllers/deleteDataControllers.js";

const deleteInitRoute = ()=>{
    const router = Router();
    router.delete("/acudiente", deleteAcudienteController);
    return router;
}

export default deleteInitRoute;