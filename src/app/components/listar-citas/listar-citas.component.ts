import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/interfaces/cita';
import { Especialidad } from 'src/app/interfaces/especialidad';
import { Medico } from 'src/app/interfaces/medico';
import { ServicioCitasService } from 'src/app/serv/cita/servicio-citas.service';
import { ServicioExtrasService } from 'src/app/serv/extra/servicio-extras.service';
import { ServicioMedicoService } from 'src/app/serv/medico/servicio-medico.service';


@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.scss']
})
export class ListarCitasComponent implements OnInit {
  public id: number;
  public citas$: Observable<Cita[]>;
  public cantCitas: number;
  public medico$: Observable<Medico[]>;
  public especialidad$: Observable<Especialidad[]>;
  public radioSelected:string;
  public displayedColumns1: string[] = ['Fecha', 'Medico', 'Especialidad','Reprogramar','Cancelar'];
  public displayedColumns2: string[] = ['Fecha', 'Medico', 'Especialidad','Estado'];
  constructor(public servicioCitas:ServicioCitasService, public servicioMedicos: ServicioMedicoService, public servicioExtra: ServicioExtrasService,public form: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.citas$ = new Observable();
    this.medico$ = new Observable();
    this.especialidad$ = new Observable();
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(parametros=>{
      this.id = parametros['id'];
    })
    this.radioSelected = "option1";
    this.citas$ = this.servicioCitas.getCitasPaciente(this.id);
    this.medico$ = this.servicioMedicos.getMedicos();
    this.especialidad$ = this.servicioExtra.getEspecialidades();

  }


}
