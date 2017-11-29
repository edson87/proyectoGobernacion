import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app/app-routing.module';
import { ComponentesListaComponent } from '../componentes-lista/componentes-lista.component';
import { Componente1Component } from '../componente1/componente1.component';
import { Componente1EditarComponent } from '../componente1-editar/componente1-editar.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { Componente2Component } from '../componente2/componente2.component';
import { Componente2EditarComponent } from '../componente2-editar/componente2-editar.component';
import { Componente3Component } from '../componente3/componente3.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgDatepickerModule
  ],
  declarations: [ComponentesListaComponent, Componente1Component, Componente1EditarComponent, Componente2Component, Componente2EditarComponent, Componente3Component]
})
export class ComponentesModule { }
