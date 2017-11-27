import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoDeLivroComponent } from './cartao-de-livro.component';

describe('CartaoDeLivroComponent', () => {
  let component: CartaoDeLivroComponent;
  let fixture: ComponentFixture<CartaoDeLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoDeLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoDeLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
