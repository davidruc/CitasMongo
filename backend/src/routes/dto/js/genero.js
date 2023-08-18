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
export class Genero {
    constructor(data) {
        Object.assign(this, data);
        this.gen_id = 1;
        this.gen_nombre = "Hombre";
        this.gen_abreviatura = "H";
    }
}
__decorate([
    Expose({ name: 'genero_id' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "genero_id" del Genero es obligatorio` }; } }),
    __metadata("design:type", Number)
], Genero.prototype, "gen_id", void 0);
__decorate([
    Expose({ name: 'genero_mombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "genero_mombre" del Genero es obligatorio` }; } }),
    __metadata("design:type", String)
], Genero.prototype, "gen_nombre", void 0);
__decorate([
    Expose({ name: 'abreviatura' }),
    IsDefined({ message: () => { throw { status: 422, message: `El "abreviatura" del Genero es obligatorio` }; } }),
    __metadata("design:type", String)
], Genero.prototype, "gen_abreviatura", void 0);
