import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Medico {
    @Expose({ name: 'matricula_profesional' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "matricula_profesional" del médico es obligatorio`}}})
    med_nroMatriculaProfesional: number;
    @Expose({ name: 'nombre_medico' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "nombre_medico" del médico es obligatorio`}}})
    med_nombreCompleto: string;
    @Expose({ name: 'consultorio' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El id del "consultorio" del médico es obligatorio`}}})
    med_consultorio: number;
    @Expose({ name: 'especialidad' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El id del "especialidad" del médico es obligatorio`}}})
    med_especialidad: number;
   
    constructor(data: Partial<Medico>){
        Object.assign(this , data);
        this.med_nroMatriculaProfesional = 212;
        this.med_nombreCompleto = "El hada madrina que manda",
        this.med_consultorio = 1;
        this.med_especialidad = 1;
    }
}