import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharep/services/service.service';

@Component({
  selector: 'ap-textil',
  templateUrl: './textil.component.html',
  styleUrls: ['./textil.component.css']
})
export class TextilComponent implements OnInit {
  public textiles:any = [];
  public titulo:string = "LISTA DE PRODUCTORES DEL RUBRO MADERA";
  public recurso:string = "textil";
  public check = "./assets/img/icons8-checkmark.png";

  
  constructor(private service:ServiceService) { }

  ngOnInit() {

    this.service.searchAllResources(this.recurso)
    .subscribe((result) => {
      this.textiles = result;
    })

  }

}
