import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public usuario:string;
  
  constructor(private _routes:Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.usuario = params['user'])
  }

}
