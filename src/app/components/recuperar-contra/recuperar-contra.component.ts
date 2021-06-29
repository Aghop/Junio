import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioPacienteService } from 'src/app/serv/paciente/servicio-paciente.service';
import { NuevaContraComponent } from '../nueva-contra/nueva-contra.component';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.scss']
})
export class RecuperarContraComponent implements OnInit {
  //VISTA PARA CONSULTAR EL EMAIL PREGUNTA Y RESPUESTA
  public recuForm: FormGroup;
  public mensaje: string = "";
  public idPregunta: number;
  public preguntas = [
    { idPregunta: 1, texto: "¿Cómo se llamaba tu primera mascota?" },
    { idPregunta: 2, texto: "¿Cuál es tu comida favorita?" },
    { idPregunta: 3, texto: "¿Cuál es tu color favorito?" }
  ]


  constructor(public form: FormBuilder, 
    public servicioPaciente: ServicioPacienteService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
    ) {

    this.recuForm = this.form.group({
      email: ['', Validators.required],
      pregunta: [null, Validators.required],
      respuesta: [{ value: '', disabled: true }, Validators.required]
    });

  }

  ngOnInit(): void {
  }
  
  onChangePregunta(valor: number) {
    this.idPregunta = valor;
    this.recuForm.get('respuesta').setValue('');
    this.recuForm.get('respuesta').enable();
  }
  onSubmit() {
    this.servicioPaciente.validarPregunta(this.recuForm.value.email, this.recuForm.value.pregunta, this.recuForm.value.respuesta).subscribe(datos => {
// SE COMPRUEBA QUE EL EMAIL CALCE CON LA PREGUNTA Y RESPUESTA SECRETA
      if (datos.length == 0) {
        this.mensaje = "Datos incorrectos";
      } else {
        console.log(datos);
        //SE ABRE EL MODAL PARA LA NUEVA CONTRA
        const modalRef = this.modalService.open(NuevaContraComponent);
        modalRef.componentInstance.paciente = datos[0];
      }

    });


  }
}
