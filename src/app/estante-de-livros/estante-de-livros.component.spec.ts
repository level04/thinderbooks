import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanteDeLivrosComponent } from './estante-de-livros.component';

describe('EstanteDeLivrosComponent', () => {
  let component: EstanteDeLivrosComponent;
  let fixture: ComponentFixture<EstanteDeLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstanteDeLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanteDeLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
