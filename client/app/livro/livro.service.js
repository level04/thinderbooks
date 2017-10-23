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
var LivroService = /** @class */ (function () {
    function LivroService(http) {
        this.url = 'v1/fotos';
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    LivroService.prototype.cadastra = function (livro) {
        if (livro._id) {
            return this.http
                .put(this.url + '/' + livro._id, JSON.stringify(livro), { headers: this.headers })
                .map(function () { return new MensagemCadastro('Livro alterada com sucesso', false); });
        }
        else {
            return this.http
                .post(this.url, JSON.stringify(livro), { headers: this.headers })
                .map(function () { return new MensagemCadastro('livro incluída com sucesso', true); });
        }
    };
    LivroService.prototype.lista = function () {
        return this.http
            .get(this.url)
            .map(function (res) { return res.json(); });
    };
    LivroService.prototype.remove = function (livro) {
        return this.http.delete(this.url + '/' + livro._id);
    };
    LivroService.prototype.buscaPorId = function (id) {
        return this.http
            .get(this.url + '/' + id)
            .map(function (res) { return res.json(); });
    };
    LivroService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LivroService);
    return LivroService;
}());
exports.LivroService = LivroService;
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
//# sourceMappingURL=livro.service.js.map