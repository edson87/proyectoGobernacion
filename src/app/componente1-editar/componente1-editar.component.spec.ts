import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1EditarComponent } from './componente1-editar.component';

describe('Componente1EditarComponent', () => {
  let component: Componente1EditarComponent;
  let fixture: ComponentFixture<Componente1EditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente1EditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente1EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
