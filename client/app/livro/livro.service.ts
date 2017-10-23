import { Http, Headers, Response } from '@angular/http';
import { LivroComponent } from './livro.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LivroService { 

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(livro: LivroComponent): Observable<MensagemCadastro> {
        
        if(livro._id) {

            return this.http
                .put(this.url + '/' + livro._id, JSON.stringify(livro), { headers: this.headers})
                .map(() => new MensagemCadastro('Livro alterada com sucesso', false));

        } else {

            return this.http
                .post(this.url, JSON.stringify(livro), { headers: this.headers })
                .map(() => new MensagemCadastro('livro incluída com sucesso', true));

        }
        
    }

    lista() {

        return this.http
        .get(this.url)
        .map(res => res.json());
    }

    remove(livro: LivroComponent):  Observable<Response> {

        return this.http.delete(this.url + '/' + livro._id);
    }

    buscaPorId(id: string): Observable<LivroComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }

}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {

        return this._inclusao;
    }

}
