import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Region } from 'src/app/interfaces/region';
import { CentroMedico } from 'src/app/interfaces/centro-medico';
import { Especialidad } from 'src/app/interfaces/especialidad';
import { Comuna } from 'src/app/interfaces/comuna';

@Injectable({
  providedIn: 'root'
})
export class ServicioExtrasService {
  private servidor: String;
  constructor(private servicio:HttpClient) { 
    this.servidor= "http://127.0.0.1:3000"
  }

  public ConsultarRegiones(id: number){
    let regiones = this.servicio.get<Region[]>(`${this.servidor}/region`).toPromise();
    return regiones;
   }

   public ConsultarComunas(id: number){
    let comunas =  this.servicio.get<Comuna[]>(`${this.servidor}/comuna`).toPromise();
    return comunas;
   }

   public ConsultarEspecialidades(id: number){
    let especialidades =  this.servicio.get<Especialidad[]>(`${this.servidor}/especialidad`).toPromise();
    return especialidades;
   }
   public ConsultarCentros(id: number){
    let centrosMedicos =  this.servicio.get<CentroMedico[]>(`${this.servidor}/centroMedico`).toPromise();
    return centrosMedicos;
   }
 
}
