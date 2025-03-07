import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSchedulerComponent } from './event-scheduler.component';

describe('EventSchedulerComponent', () => {
  let component: EventSchedulerComponent;
  let fixture: ComponentFixture<EventSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventSchedulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
