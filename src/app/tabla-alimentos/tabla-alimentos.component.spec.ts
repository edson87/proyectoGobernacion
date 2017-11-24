import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlimentosComponent } from './tabla-alimentos.component';

describe('TablaAlimentosComponent', () => {
  let component: TablaAlimentosComponent;
  let fixture: ComponentFixture<TablaAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
