import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    InscripcionComponent,
    CueroComponent,
    AlimentosComponent,
    MetalComponent,
    EditarListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BuscarModule,
    HttpClientModule,
    RubrosModule,
    TablaModule,
    NgDatepickerModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
