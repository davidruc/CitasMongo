import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Documento {
    @Expose({ name: 'tipo_documento_id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "tipo_documento_id" del Documento es obligatorio`}}})
    tipodoc_id: number;
    @Expose({ name: 'tipo_documento' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "tipo_documento" del Documento es obligatorio`}}})
    tidodoc_nombre: string;
    @Expose({ name: 'abreviatura' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "tipodoc_abreviatura" del Documento es obligatorio`}}})
    tipodoc_abreviatura: string;
    constructor(data: Partial<Documento>){
        Object.assign(this , data);
        this.tipodoc_id = 1;
        this.tidodoc_nombre = "cedula de ciudadania";
        this.tipodoc_abreviatura = "cc"
    }
}