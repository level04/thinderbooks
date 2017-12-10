import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoLivroComponent } from './novo-livro.component';

describe('NovoLivroComponent', () => {
  let component: NovoLivroComponent;
  let fixture: ComponentFixture<NovoLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
