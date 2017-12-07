import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public titulo:string = 'Proyecto Fortalecimiento a las Unidades Productivas Económicas en Cochabamba';


  ngOnInit() {
    
  }
}
