import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'usuario', 
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent { 

    @Input() nome: string;
    @Input() sobrenome: string;
    @Input() dataNascimento: Date;
    @Input() email: string;
    @Input() senha: string;
    @Input() confirmaSenha: string;
    _id: string;
}