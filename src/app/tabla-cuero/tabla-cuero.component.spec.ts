import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCueroComponent } from './tabla-cuero.component';

describe('TablaCueroComponent', () => {
  let component: TablaCueroComponent;
  let fixture: ComponentFixture<TablaCueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
