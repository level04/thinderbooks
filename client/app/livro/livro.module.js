"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var livro_component_1 = require("./livro.component");
var livro_pipes_1 = require("./livro.pipes");
var livro_service_1 = require("./livro.service");
var LivroModule = /** @class */ (function () {
    function LivroModule() {
    }
    LivroModule = __decorate([
        core_1.NgModule({
            declarations: [livro_component_1.LivroComponent, livro_pipes_1.FiltroPorTitulo],
            exports: [livro_component_1.LivroComponent, livro_pipes_1.FiltroPorTitulo],
            providers: [livro_service_1.LivroService]
        })
    ], LivroModule);
    return LivroModule;
}());
exports.LivroModule = LivroModule;
//# sourceMappingURL=livro.module.js.map