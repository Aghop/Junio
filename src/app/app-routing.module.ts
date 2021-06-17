import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';

const routes: Routes = [
{path:
  'cita/:id',component:ListarCitasComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
