import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente } from './../../interfaces/paciente';
import { Router } from '@angular/router';
import { ServicioPacienteService } from '../../serv/paciente/servicio-paciente.service';
import { ServicioExtrasService } from 'src/app/serv/extra/servicio-extras.service';
import { Observable, Subscription } from 'rxjs';
import { Region } from 'src/app/interfaces/region';
import { Comuna } from 'src/app/interfaces/comuna';

@Component({
  selector: 'app-formulario-crear-cuenta',
  templateUrl: './formulario-crear-cuenta.component.html',
  styleUrls: ['./formulario-crear-cuenta.component.scss'],
})
export class FormularioCrearCuentaComponent implements OnInit, OnDestroy {
/* ------------------------ FORMULARIO PARA REGISTRO ------------------------ */




  /* ------------------------- ARRAYS PARA LOS SELECT ------------------------- */
  public digVer = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: 'k' }
  ];

  public preguntas = [
    { idPregunta: 1 , texto: "¿Cómo se llamaba tu primera mascota?" },
    { idPregunta: 2 , texto: "¿Cuál es tu comida favorita?" },
    { idPregunta: 3 , texto: "¿Cuál es tu color favorito?" }
  ]


  public pac: Paciente;
  public regiones$: Observable<Region[]>;
  public comunas: Comuna[];
  public comunas$: Observable<Comuna[]>;
  public comunaSubscription: Subscription;
  public comunaDisabled = true;
  public pacienteForm: FormGroup;
  public idRegion: number;
  public idPregunta: number;
  
  public dist: boolean = false;

  constructor(
    public form: FormBuilder,
    private router: Router,
    public pacienteService: ServicioPacienteService,
    public servicioExtra: ServicioExtrasService,
  ) {
    this.comunas$ = this.servicioExtra.getComunas();
    this.regiones$ = new Observable();

    this.pacienteForm = this.form.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      rut: ['', [Validators.required,Validators.pattern('^[0-9]+$') ]],
      digVerr: [null, Validators.required],
      direccion: ['', Validators.required],
      region: [null, Validators.required],
      comuna: [{ value: null, disabled: true }, Validators.required],
      email: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
      confirmacion: ['', Validators.required],
      pregunta: [null, Validators.required],
      respuesta: [{value: '', disabled: true}, Validators.required]
    });
  }



  ngOnInit(): void {
    this.comunaSubscription = this.comunas$.subscribe( (comunasList: Comuna[]) => this.comunas = comunasList );
    this.regiones$ = this.servicioExtra.getRegiones();

  }
  ngOnDestroy(): void {
    this.comunaSubscription.unsubscribe();
  }
  //FUNCION PARA QUE LAS COMUNAS SOLO SE MUESTREN CUANDO HAY UNA REGION SELECCIONADA
  onChange(valor: number) {
    this.idRegion = valor;
    this.pacienteForm.get('comuna').setValue('');
    this.pacienteForm.get('comuna').enable();
  }
  //LO MISMO DE ARRIBA PERO CON LAS PREGUNTAS Y RESPUESTAS
  onChangePregunta(valor: number) {
    this.idPregunta = valor;
    this.pacienteForm.get('respuesta').setValue('');
    this.pacienteForm.get('respuesta').enable();
  }
  // PARA LLENAR EL ARRAY DE COMUNAS CON LAS QUE CORRESPONDAD POR REGION
  get comunasByRegion() {
    try {
      return this.comunas.filter(items => {
        return items.idRegion == this.idRegion;
      })
    } catch (error) {
      return null;
    }
  }
  
  submit() {
    if (this.pacienteForm.value.password == this.pacienteForm.value.confirmacion) {
    this.pac = {
      idPaciente: 0,
      nombre: this.pacienteForm.value.nombre,
      apellidos: this.pacienteForm.value.apellidos,
      rut: this.pacienteForm.value.rut,
      digVer: this.pacienteForm.value.digVerr,
      direccion: this.pacienteForm.value.direccion,
      idRegion: this.pacienteForm.value.region,
      idComuna: this.pacienteForm.value.comuna,
      email: this.pacienteForm.value.email,
      username: this.pacienteForm.value.user,
      password: this.pacienteForm.value.password,
      pregunta: this.pacienteForm.value.pregunta,
      respuesta: this.pacienteForm.value.respuesta
    }
    this.pacienteService.addPaciente(this.pac)
      .subscribe(() => {
      })

      window.location.href="/login";

    }else {
      //VARIABLE PARA MOSTRAR UN ERROR
      this.dist = true
    }
  }


}