import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Cita {
    @Expose({ name: 'fecha_cita' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "fecha_cita" de la Cita es obligatorio`}}})
    cit_fecha: Date;
    @Expose({ name: 'estado_cita' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "codigo_Cita" de la Cita es obligatorio`}}})
    cit_estadoCita: number;
    @Expose({ name: 'medico_asignado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "codigo_Cita" de la Cita es obligatorio`}}})
    cit_medico: number;
    @Expose({ name: 'usuario_cita' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "codigo_Cita" de la Cita es obligatorio`}}})
    cit_datosUsuario: number;
    constructor(data: Partial<Cita>){
        Object.assign(this , data);
        this.cit_fecha = new Date(2023,9,14);
        this.cit_estadoCita = 1;
        this.cit_medico = 1;
        this.cit_datosUsuario = 1;
    }
}