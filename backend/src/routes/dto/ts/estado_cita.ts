import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class EstadoCita {
    @Expose({ name: 'estado_cita' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "estado_cita" del estado de la cita es obligatorio`}}})
    estcita_nombre: string;
   
    constructor(data: Partial<EstadoCita>){
        Object.assign(this , data);
        this.estcita_nombre = "agendada"
    }
}