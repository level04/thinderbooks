"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var livro_service_1 = require("../livro/livro.service");
var ListagemComponent = /** @class */ (function () {
    function ListagemComponent(service) {
        var _this = this;
        this.livros = [];
        this.mensagem = '';
        this.service = service;
        this.service
            .lista()
            .subscribe(function (lista) {
            var listagem = [];
            lista.forEach(function (atual) {
                if (atual.url != "" && atual.nome == undefined) {
                    listagem.push(atual);
                }
            });
            _this.livros = listagem;
        });
    }
    ListagemComponent.prototype.remove = function (livro, painel) {
        var _this = this;
        this.service
            .remove(livro)
            .subscribe(function () {
            painel.fadeOut(function () {
                var novosLivros = _this.livros.slice(0);
                var indice = novosLivros.indexOf(livro);
                novosLivros.splice(indice, 1);
                _this.livros = novosLivros;
                _this.mensagem = 'Livro removida com sucesso';
            });
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'Não foi possível remover o livro';
        });
    };
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }),
        __metadata("design:paramtypes", [livro_service_1.LivroService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map