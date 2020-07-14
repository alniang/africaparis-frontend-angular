import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEventsComponent } from './ajout-events.component';

describe('AjoutEventsComponent', () => {
  let component: AjoutEventsComponent;
  let fixture: ComponentFixture<AjoutEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
