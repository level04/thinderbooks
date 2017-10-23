import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { LivroComponent } from '../livro/livro.component';
import { LivroService } from '../livro/livro.service';
import { ListagemComponent } from '../listagem/listagem.component';
import { ListagemUsuarioComponent } from '../listagemUsuario/listagemUsuario.component';

@Component({
    moduleId: module.id,
    selector: 'contaUsuario',
    templateUrl: './contaUsuario.component.html',
    styleUrls: ['./contaUsuario.component.css']
})
export class ContaUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    service: UsuarioService;
    livros: LivroComponent[] = [];
    serviceLi: LivroService;
    ServiceUs: UsuarioService;
    mensagem: string = '';

    constructor(service: LivroService, userService: UsuarioService) {

       
    }

}