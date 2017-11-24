import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextilComponent } from './textil.component';

describe('TextilComponent', () => {
  let component: TextilComponent;
  let fixture: ComponentFixture<TextilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
