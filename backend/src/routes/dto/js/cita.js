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
export class Cita {
    constructor(data) {
        Object.assign(this, data);
        this.cit_fecha = new Date(2023, 9, 14);
        this.cit_estadoCita = 1;
        this.cit_medico = 1;
        this.cit_datosUsuario = 1;
    }
}
__decorate([
    Expose({ name: 'fecha_cita' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "fecha_cita" de la Cita es obligatorio` }; } }),
    __metadata("design:type", Date)
], Cita.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: 'estado_cita' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "codigo_Cita" de la Cita es obligatorio` }; } }),
    __metadata("design:type", Number)
], Cita.prototype, "cit_estadoCita", void 0);
__decorate([
    Expose({ name: 'medico_asignado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "codigo_Cita" de la Cita es obligatorio` }; } }),
    __metadata("design:type", Number)
], Cita.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: 'usuario_cita' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "codigo_Cita" de la Cita es obligatorio` }; } }),
    __metadata("design:type", Number)
], Cita.prototype, "cit_datosUsuario", void 0);
