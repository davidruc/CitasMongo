import config from "./src/utils/config.js";
import express from "express";
import initApiRoutes from "./src/routes/router.js";

const app = express();

app.use(express.json())
app.use("/api", initApiRoutes());


app.listen(config.server, ()=>{
    console.log(`El servidor está activo: http://${config.server.hostname}:${config.server.port}`);
})