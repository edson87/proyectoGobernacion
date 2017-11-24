import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public titulo:string = 'Proyecto Fortalecimiento A Las Unidades Productivas Económicas En Cochabamba';


  ngOnInit() {
    
  }
}
