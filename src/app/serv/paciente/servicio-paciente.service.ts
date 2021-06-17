import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {
  private servidor: String;
  constructor(private servicio:HttpClient) { 
    this.servidor= "http://127.0.0.1:3000"
  }

  /**
   * Devuelve un paciente
   * @params id - id del paciente
   * @return paciente - paciente
   */
  public async ConsultarPaciente(id: number){
   let paciente = await this.servicio.get(`${this.servidor}/paciente/${id}`).toPromise();
   return paciente;
  }

  public async ConsultarPacientes(){
    let pacientes = await this.servicio.get(`${this.servidor}/paciente`).toPromise();
    return pacientes;
   }


   /* ------------------------------ FALTA EL POST ----------------------------- */
}