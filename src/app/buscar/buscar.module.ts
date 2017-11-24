import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarListaComponent } from '../buscar-lista/buscar-lista.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app/app-routing.module';
import { BuscarMunicipioComponent } from '../buscar-municipio/buscar-municipio.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgDatepickerModule
  ],
  declarations: [BuscarListaComponent, BuscarMunicipioComponent]
})
export class BuscarModule { }
