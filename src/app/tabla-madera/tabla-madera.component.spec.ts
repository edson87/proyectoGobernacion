import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMaderaComponent } from './tabla-madera.component';

describe('TablaMaderaComponent', () => {
  let component: TablaMaderaComponent;
  let fixture: ComponentFixture<TablaMaderaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMaderaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
