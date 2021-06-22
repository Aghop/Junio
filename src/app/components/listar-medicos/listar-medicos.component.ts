import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CentroMedico } from 'src/app/interfaces/centro-medico';
import { Especialidad } from 'src/app/interfaces/especialidad';
import { Medico } from 'src/app/interfaces/medico';
import { ServicioExtrasService } from 'src/app/serv/extra/servicio-extras.service';
import { ServicioMedicoService } from 'src/app/serv/medico/servicio-medico.service';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.scss']
})
export class ListarMedicosComponent implements OnInit, OnDestroy {


  public medico$: Observable<Medico[]>;

  public especialidad: Especialidad[];
  public especialidad$: Observable<Especialidad[]>;
  public especialidadSubscription: Subscription;

  public centroMedico: CentroMedico[];
  public centroMedico$: Observable<CentroMedico[]>;
  public centroMedicoSubscription: Subscription;

  public displayedColumns1 = ['Profesional', 'Especialidad', 'CentroMedico'];

  constructor(
    public servicioMedicos: ServicioMedicoService,
    public servicioExtra: ServicioExtrasService

  ) {
    this.medico$ = new Observable();
    this.especialidad$ = this.servicioExtra.getEspecialidades();
    this.centroMedico$ = this.servicioExtra.getCentros();

  }
  ngOnDestroy(): void {
    this.especialidadSubscription.unsubscribe();
    this.centroMedicoSubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.medico$ = this.servicioMedicos.getMedicos();
    this.especialidadSubscription = this.especialidad$.subscribe((especialidadList: Especialidad[]) => this.especialidad = especialidadList);
    this.centroMedicoSubscription = this.centroMedico$.subscribe((centroMedicoList: CentroMedico[]) => this.centroMedico = centroMedicoList);


  }

}
