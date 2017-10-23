import { NgModule } from '@angular/core';
import { UsuarioComponent }  from './usuario.component';
import { UsuarioService }  from './usuario.service';

@NgModule({
    declarations: [ UsuarioComponent ],
    exports: [ UsuarioComponent ],
    providers: [ UsuarioService ]
})
export class UsuarioModule { } 
