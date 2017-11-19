import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNovoLivroComponent } from './formulario-novo-livro.component';

describe('FormularioNovoLivroComponent', () => {
  let component: FormularioNovoLivroComponent;
  let fixture: ComponentFixture<FormularioNovoLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNovoLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNovoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
