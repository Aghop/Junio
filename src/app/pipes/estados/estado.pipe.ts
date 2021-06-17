import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      
      case 1:
        return "abierta";

      case 2:
        return "cancelada"
       
      case 3:
        return "concluida"
      
      default:

        break;
    }

    return null;
  }

}
