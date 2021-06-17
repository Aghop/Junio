import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
import { Medico } from 'src/app/interfaces/medico';
import { ServicioCitasService } from 'src/app/serv/cita/servicio-citas.service';
import { ServicioMedicoService } from 'src/app/serv/medico/servicio-medico.service';


@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.scss']
})
export class ListarCitasComponent implements OnInit {
  public id: number;
  public citas: Cita[];
  public medico: Medico[];
  constructor(public servicioCitas:ServicioCitasService, public servicioMedicos: ServicioMedicoService, public form: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void>{
    this.activatedRoute.params.subscribe(parametros=>{
      this.id = parametros['id'];
    })
    this.medico = await this.servicioMedicos.ConsultarMedicos();
    this.citas = await this.servicioCitas.ConsultarCitasPaciente(this.id);
    console.log(this.citas);
  }

}
