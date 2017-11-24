import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMetalComponent } from './tabla-metal.component';

describe('TablaMetalComponent', () => {
  let component: TablaMetalComponent;
  let fixture: ComponentFixture<TablaMetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaMetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
