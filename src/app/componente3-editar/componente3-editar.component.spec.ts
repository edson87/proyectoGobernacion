import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente3EditarComponent } from './componente3-editar.component';

describe('Componente3EditarComponent', () => {
  let component: Componente3EditarComponent;
  let fixture: ComponentFixture<Componente3EditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente3EditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente3EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
