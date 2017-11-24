import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTextilComponent } from './tabla-textil.component';

describe('TablaTextilComponent', () => {
  let component: TablaTextilComponent;
  let fixture: ComponentFixture<TablaTextilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaTextilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTextilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
