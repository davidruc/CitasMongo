import { Router } from "express";
import getInitRoute from "./getData.js";
import postInitRoute from "./postData.js";
import putInitRoute from "./updateData.js";
import deleteInitRoute from "./deleteData.js";
const initApiRoutes = ()=>{
    const router = Router();
    router.use("/use", getInitRoute());
    router.use("/use", postInitRoute());
    router.use("/use", putInitRoute());
    router.use("/use", deleteInitRoute());
    return router;
}
export default initApiRoutes;