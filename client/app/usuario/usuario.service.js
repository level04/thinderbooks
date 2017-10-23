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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    UsuarioService.prototype.cadastra = function (usuario) {
        if (usuario._id) {
            return this.http
                .put(this.url + '/' + usuario._id, JSON.stringify(usuario), { headers: this.headers })
                .map(function () { return new MensagemCadastro('Usuário alterado com sucesso', false); });
        }
        else {
            return this.http
                .post(this.url, JSON.stringify(usuario), { headers: this.headers })
                .map(function () { return new MensagemCadastro('Usuário incluído com sucesso', true); });
        }
    };
    UsuarioService.prototype.lista = function () {
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.buscaPorId = function (id) {
        console.log(id);
        return this.http
            .get(this.url + '/' + id)
            .map(function (res) { return res.json(); });
    };
    UsuarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
var MensagemCadastro = /** @class */ (function () {
    function MensagemCadastro(_mensagem, _inclusao) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    Object.defineProperty(MensagemCadastro.prototype, "mensagem", {
        get: function () {
            return this._mensagem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MensagemCadastro.prototype, "inclusao", {
        get: function () {
            return this._inclusao;
        },
        enumerable: true,
        configurable: true
    });
    return MensagemCadastro;
}());
exports.MensagemCadastro = MensagemCadastro;
//# sourceMappingURL=usuario.service.js.map