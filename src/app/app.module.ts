import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavVarComponent } from './components/nav-var/nav-var.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstadoPipe } from './pipes/estados/estado.pipe';
import { MedicoPipe } from './pipes/medicos/medico.pipe';
import { EspecialidadIdPipe } from './pipes/especialidad/especialidad-id.pipe';
import { IdToNamePipe } from './pipes/especialidad/id-to-name.pipe';
import { CountCitaPipe } from './pipes/cita/count-cita.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavVarComponent,
    ListarCitasComponent,
    EstadoPipe,
    MedicoPipe,
    EspecialidadIdPipe,
    IdToNamePipe,
    CountCitaPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
