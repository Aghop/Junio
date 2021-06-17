import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cita } from 'src/app/interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class ServicioCitasService {
  private servidor: String;
  constructor(private servicio:HttpClient) { 
    this.servidor= "http://127.0.0.1:3000"
  }

  /**
   * Devuelve las citas de un paciente
   * @params id - id del paciente
   * @return citas - lista de citas del paciente
   */
  public ConsultarCitasPaciente(id: number){
   let citas = this.servicio.get<Cita[]>(`${this.servidor}/api/cita/${id}/all`).toPromise();
   return citas;
  }

  public BorrarCita(id: number){
    let citas = this.servicio.get(`${this.servidor}/api/delete/cita/${id}`).toPromise();
    return citas;
   }

   /* ------------------------- FALTA EL POST Y UPDATE ------------------------- */
}
