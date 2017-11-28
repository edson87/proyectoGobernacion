import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app/app-routing.module';
import { ComponentesListaComponent } from '../componentes-lista/componentes-lista.component';
import { Componente1Component } from '../componente1/componente1.component';
import { Componente1EditarComponent } from '../componente1-editar/componente1-editar.component';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgDatepickerModule
  ],
  declarations: [ComponentesListaComponent, Componente1Component, Componente1EditarComponent]
})
export class ComponentesModule { }
