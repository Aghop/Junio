import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public logged = false;
  public datos = '';
  public datosAdmin = '';


  constructor() { }

  ngOnInit(): void {
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
    localStorage.removeItem('hospital');
    localStorage.removeItem('hospitalAmin');
    window.location.href="/login";
  }
}
