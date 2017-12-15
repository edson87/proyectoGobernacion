import { Injectable } from '@angular/core';
import { Login } from '../../../model/login';
import { Ficha } from '../../../model/ficha';
import { Componente } from '../../../model/componente';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServiceService {

  public login: Login[];
  public ficha: Ficha[];
  public componente: Componente[];
  public urlInsert = "http://ciadep.org:3000/insertarInscripciones";

  constructor(private http:HttpClient) { }

  /*public InsertInscription(ficha: Ficha){
    Promise.resolve((inscripcion: Ficha[]) => inscripcion.push(ficha));
  }*/

  public getLogin(): Observable<any>{
      return this.http.get(`http://ciadep.org:3000/allLogins`);
  }

  public identifyUser(account: string): Observable<any>{
    return this.http.get(`http://ciadep.org:3000/regiterAccount/${account}`);
    //return this.http.get(`https://api-proyecto.herokuapp.com/regiterAccount/${account}`);
  }

  public insertRecords(ficha: Ficha): Observable<any>{ 
    return this.http.post(this.urlInsert,ficha);
    //return this.http.post('https://api-proyecto.herokuapp.com/insertForm',ficha);
  }

  public searchAllNames(){
    return this.http.get(`http://ciadep.org:3000/searchAllNames`);
  }

  public searchByNames(id:any){
    return this.http.get(`http://ciadep.org:3000/searchByName/${id}`);
  }

  public searchByCI(id:string){
    return this.http.get(`http://ciadep.org:3000/searchByCI/${id}`);
  }

  public searchAllResources(id:string){
    return this.http.get(`http://ciadep.org:3000/searchAllWood/${id}`); 
  }

  public deleteItem(id:string): Observable<any>{
    return this.http.delete(`http://ciadep.org:3000/deleteItem/${id}`);
  }

  public searchByItem(id:string): Observable<any>{
    return this.http.get(`http://ciadep.org:3000/searchItem/${id}`);
  }

  public searchByMunicipio(id:any):Observable<any>{
    return this.http.get(`http://ciadep.org:3000/searchMunicipio/${id}`);
  }

  public searchByMunicipioRubro(municipio,rubro):Observable<any>{
    return this.http.get(`http://ciadep.org:3000/searchByMunicipioRubro/${municipio}/${rubro}`)
  }

  public countByMunicipio(municipio){
    return this.http.get(`http://ciadep.org:3000/countMunicipio/${municipio}`);
  }
  
  public countByMunicipioAndRubro(municipio:any, rubro:any){
    return this.http.get(`http://ciadep.org:3000/countByMunicipioRubro/countByMunicipioRubro/${municipio}/${rubro}`);
  }

  public updateRecord(ficha:Ficha): Observable<any>{
    return this.http.put(`http://ciadep.org:3000/actualizarInscripcion`,ficha);
  }

  //Endpoint Componentes
  public insertComponents(componente: Componente): Observable<any>{
    return this.http.post("http://ciadep.org:3000/ingresarComponente",componente);
  }

  public showComponent1(){
    return this.http.get(`http://ciadep.org:3000/showComponenteUno`);
  }

  public showComponent2(){
    return this.http.get(`http://ciadep.org:3000/showComponenteDos`);
  }

  public showComponent3(){
    return this.http.get(`http://ciadep.org:3000/showComponenteTres`);
  }

  public showOnlyOneComponent(id:any):Observable<any>{
    return this.http.get(`http://ciadep.org:3000/mostrarUnComponente/${id}`);
  }

  public updateOneComponent(componente: Componente): Observable<any>{
    return this.http.put('http://ciadep.org:3000/actualizarUnComponente',componente);
  }
  
  public deleteComponetItem(codigo:any): Observable<any>{
    return this.http.delete(`http://ciadep.org:3000/deleteComponenteItem/${codigo}`);
  }

  public updateRecordEdited(componente:Componente): Observable<any>{
    return this.http.put(`http://ciadep.org:3000/actualizarInscripcionEditadas`,componente);
  }
}
