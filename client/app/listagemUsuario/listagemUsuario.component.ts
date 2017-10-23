import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
    moduleId: module.id,
    selector: 'listagemUsuario',
    templateUrl: './listagemUsuario.component.html',
    styleUrls: ['./listagemUsuario.component.css']
})

export class ListagemUsuarioComponent {

    usuarios: UsuarioComponent[] = [];
    service: UsuarioService;
    mensagem: string = '';

    constructor(service: UsuarioService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(lista => {
                var listagem[];
                lista.forEach(atual => {
                    if(atual.url == undefined && atual.nome != ""){
                        listagem.push(atual);
                    }
                });
                this.usuarios= listagem;
            });
    }
 }