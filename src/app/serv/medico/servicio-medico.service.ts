import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Medico } from 'src/app/interfaces/medico';

@Injectable({
  providedIn: 'root'
})
export class ServicioMedicoService {
  private servidor: String;
  constructor(private servicio:HttpClient) { 
    this.servidor= "http://127.0.0.1:3000"
  }

  /**
   * Devuelve un medico por id
   * @params id - id del medico
   * @return paciente - medico
   */
  public ConsultarMedico(id: number){
   let medico = this.servicio.get<Medico>(`${this.servidor}/api/medico/${id}`).toPromise();
   return medico;
  }
  public ConsultarMedicos(){
    let medicos =  this.servicio.get<Medico[]>(`${this.servidor}/api/medico/all`).toPromise();
    return medicos;
   }

   public BorrarMedico(id: number){
    let citas = this.servicio.get(`${this.servidor}/api/medico/delete/${id}`).toPromise();
    return citas;
   }

   /* ------------------------------ FALTA EL POST ----------------------------- */
}