import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Paciente } from 'src/app/interfaces/paciente';
import { ServicioPacienteService } from 'src/app/serv/paciente/servicio-paciente.service';

@Component({
  selector: 'app-nueva-contra',
  templateUrl: './nueva-contra.component.html',
  styleUrls: ['./nueva-contra.component.scss']
})
export class NuevaContraComponent implements OnInit {
  @Input() paciente: Paciente;
  public nuevaForm: FormGroup;
  public dist: boolean = false;

  constructor(public form: FormBuilder, public servicioPaciente: ServicioPacienteService, public activeModal: NgbActiveModal,) {

    this.nuevaForm = this.form.group({
      password: ['', Validators.required],
      confirmacion: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }
  onClickAccept() {
    //SE COMPRUEBA QUE LAS CONTRASENAS NUEVAS CALCEN
    if (this.nuevaForm.value.password == this.nuevaForm.value.confirmacion) {
      this.paciente.password = this.nuevaForm.value.password;
      this.servicioPaciente.updateContra(this.paciente).subscribe(() => {
        console.log('Content updated successfully!')
      });
      this.activeModal.close('Close click');
      window.location.href=`/login`;
    } else {
      //SI NO, UN MENSAJE DE ERROR
      this.dist = true
    }



  }
}
