import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesListaComponent } from './componentes-lista.component';

describe('ComponentesListaComponent', () => {
  let component: ComponentesListaComponent;
  let fixture: ComponentFixture<ComponentesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
