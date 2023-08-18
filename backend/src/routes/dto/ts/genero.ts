import { Expose, Transform } from "class-transformer";
import { IsDefined } from "class-validator";

export class Genero {
    @Expose({ name: 'genero_id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "genero_id" del Genero es obligatorio`}}})
    gen_id: number;
    @Expose({ name: 'genero_mombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "genero_mombre" del Genero es obligatorio`}}})
    gen_nombre: string;
    @Expose({ name: 'abreviatura' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El "abreviatura" del Genero es obligatorio`}}})
    gen_abreviatura: string;
    constructor(data: Partial<Genero>){
        Object.assign(this , data);
        this.gen_id = 1;
        this.gen_nombre = "Hombre";
        this.gen_abreviatura = "H"
    }
}