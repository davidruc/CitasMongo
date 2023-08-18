var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";
export class Medico {
    constructor(data) {
        Object.assign(this, data);
        this.med_nroMatriculaProfesional = 212;
        this.med_nombreCompleto = "El hada madrina que manda",
            this.med_consultorio = 1;
        this.med_especialidad = 1;
    }
}
__decorate([
    Expose({ name: 'matricula_profesional' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "matricula_profesional" del médico es obligatorio` }; } }),
    __metadata("design:type", Number)
], Medico.prototype, "med_nroMatriculaProfesional", void 0);
__decorate([
    Expose({ name: 'nombre_medico' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "nombre_medico" del médico es obligatorio` }; } }),
    __metadata("design:type", String)
], Medico.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'consultorio' }),
    IsDefined({ message: () => { throw { status: 422, message: `El id del "consultorio" del médico es obligatorio` }; } }),
    __metadata("design:type", Number)
], Medico.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: 'especialidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `El id del "especialidad" del médico es obligatorio` }; } }),
    __metadata("design:type", Number)
], Medico.prototype, "med_especialidad", void 0);
