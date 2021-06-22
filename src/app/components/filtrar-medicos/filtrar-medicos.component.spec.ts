import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarMedicosComponent } from './filtrar-medicos.component';

describe('FiltrarMedicosComponent', () => {
  let component: FiltrarMedicosComponent;
  let fixture: ComponentFixture<FiltrarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
