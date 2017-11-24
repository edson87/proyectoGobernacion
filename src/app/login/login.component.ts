import { Component, OnInit, ViewChild } from '@angular/core';
import { Login } from '../../model/login'


import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceService } from '../sharep/services/service.service';
import { NgForm } from '@angular/forms'; 
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'ap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RouterModule]
})
export class LoginComponent implements OnInit {

  @ViewChild('fromlogin') fromlogin:NgForm;
  public usuario: string;
  public contrasenia: string;
  public login: Login;
  public auntentificacion;
  public validUser:string;
  public validCont:string;


  constructor(private _router:Router, private route: ActivatedRoute, private _loginService: ServiceService) { }

  ngOnInit() {
    this.login = new Login();

    window.localStorage.clear();
  }

  onSubmit(){

    if((this.login['usuario'] === undefined || this.login['contrasenia'] === undefined) || 
                  (this.login['usuario'] === undefined && this.login['contrasenia'] === undefined)){
      //alert("Revise sus datos")
      $('#exampleModal').modal('show')
    }else{
      this._loginService.identifyUser(this.login['usuario'])
        .subscribe((result) => {
          if (result.length === 0){
            alert("no son iguales las contraseñas");
            this.fromlogin.reset();

          }else{
            if ((this.login['usuario'] === result[0]['usuario'])&&(this.login['contrasenia'] === result[0]['contrasenia'])) {
              localStorage.setItem('currentAccount',JSON.stringify(result[0]));
              this._router.navigate(['inscripcion']);

            }else{
              alert("no son iguales las contraseñas");
              this.fromlogin.reset();

            }
          }
      })
    }  
  }
}
