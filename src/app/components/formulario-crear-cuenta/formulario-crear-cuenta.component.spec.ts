import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearCuentaComponent } from './formulario-crear-cuenta.component';

describe('FormularioCrearCuentaComponent', () => {
  let component: FormularioCrearCuentaComponent;
  let fixture: ComponentFixture<FormularioCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
