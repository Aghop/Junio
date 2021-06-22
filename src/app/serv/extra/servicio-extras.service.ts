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

  public getRegiones(){
    let regiones = this.servicio.get<Region[]>(`${this.servidor}/api/region/all`);
    return regiones;
   }

   public getComunas(){
    let comunas =  this.servicio.get<Comuna[]>(`${this.servidor}/api/comuna/all`);
    return comunas;
   }

   public getEspecialidades(){
    let especialidades =  this.servicio.get<Especialidad[]>(`${this.servidor}/api/especialidad/all`);
    return especialidades;
   }
   public getCentros(){
    let centrosMedicos =  this.servicio.get<CentroMedico[]>(`${this.servidor}/api/centroMedico/all`);
    return centrosMedicos;
   }
 
}
