import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'livro', 
    templateUrl: './livro.component.html',
    styleUrls: ['./livro.component.css']
})
export class LivroComponent { 

    @Input() titulo: string;
    @Input() isbn: string;
    descricao: string;
    _id: string;
}