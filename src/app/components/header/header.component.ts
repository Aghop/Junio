import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//MUESTRA EL NOMBRE DE USUARIO Y BOTON PARA DESCONECTAR SI SE ESTA LOGEADO

  public logged = false;
  public datos = '';
  public datosAdmin = '';


  constructor() { }

  ngOnInit(): void {
    //SE COMPRUEBA QUE EXISTA UN USUARIO O UN ADMIN LOGEADO
    if (localStorage.getItem('hospital')) {
      this.datos = JSON.parse(localStorage.getItem('hospital')).username;
    }
    if (localStorage.getItem('hospitalAdmin')) {
      this.datosAdmin = JSON.parse(localStorage.getItem('hospitalAdmin')).username;
    }

    console.log(this.datos, this.datosAdmin);

    if (this.datos || this.datosAdmin) this.logged = true;



  }
  deslog() {
    //SE REMUEVEN TODOS LOS LOGEOS
    localStorage.removeItem('hospital');
    localStorage.removeItem('hospitalAmin');
    window.location.href="/login";
  }
}
