import { NgModule } from '@angular/core';
import { LivroComponent } from './livro.component';
import { FiltroPorTitulo } from './livro.pipes';
import { LivroService } from './livro.service';

@NgModule({
    declarations: [ LivroComponent, FiltroPorTitulo],
    exports: [ LivroComponent, FiltroPorTitulo ],
    providers: [ LivroService ]
})
export class LivroModule { }