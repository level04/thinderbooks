import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaEstanteComponent } from './minha-estante.component';

describe('MinhaEstanteComponent', () => {
  let component: MinhaEstanteComponent;
  let fixture: ComponentFixture<MinhaEstanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaEstanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaEstanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
