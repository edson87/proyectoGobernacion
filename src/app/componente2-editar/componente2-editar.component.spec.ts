import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2EditarComponent } from './componente2-editar.component';

describe('Componente2EditarComponent', () => {
  let component: Componente2EditarComponent;
  let fixture: ComponentFixture<Componente2EditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente2EditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente2EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
