import { Http, Headers, Response } from '@angular/http';
import { UsuarioComponent } from './usuario.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService { 

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(usuario: UsuarioComponent): Observable<MensagemCadastro> {
        
        if(usuario._id) {

            return this.http
                .put(this.url + '/' + usuario._id, JSON.stringify(usuario), { headers: this.headers})
                .map(() => new MensagemCadastro('Usuário alterado com sucesso', false));

        } else {

            return this.http
                .post(this.url, JSON.stringify(usuario), { headers: this.headers })
                .map(() => new MensagemCadastro('Usuário incluído com sucesso', true));

        }
        
    }

    lista() {
        
        return this.http
        .get(this.url)
        .map(res => res.json());
    }

    buscaPorId(id: string): Observable<UsuarioComponent> {
        console.log(id);
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
