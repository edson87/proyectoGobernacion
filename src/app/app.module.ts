
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { MenuComponent } from '../app/menu/menu.component';
import { InscripcionComponent } from '../app/inscripcion/inscripcion.component';
import { ServiceService } from './sharep/services/service.service';
import { BuscarModule } from './buscar/buscar.module';
import { RubrosModule } from './rubros/rubros.module';
import { CueroComponent } from './cuero/cuero.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { MetalComponent } from './metal/metal.component';
import { TablaModule } from './tabla/tabla.module';
import { EditarListaComponent } from './editar-lista/editar-lista.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { ComponentesModule } from './componentes/componentes.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InscripcionComponent,
    CueroComponent,
    AlimentosComponent,
    MetalComponent,
    EditarListaComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BuscarModule,
    HttpClientModule,
    RubrosModule,
    TablaModule,
    NgDatepickerModule,
    ComponentesModule
  ],
  providers: [ServiceService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
