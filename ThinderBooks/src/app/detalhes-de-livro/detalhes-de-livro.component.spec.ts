import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDeLivroComponent } from './detalhes-de-livro.component';

describe('DetalhesDeLivroComponent', () => {
  let component: DetalhesDeLivroComponent;
  let fixture: ComponentFixture<DetalhesDeLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesDeLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDeLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
