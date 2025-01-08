import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-scheduler',
  templateUrl: './event-scheduler.component.html',
  styleUrls: ['./event-scheduler.component.css'],
})
export class EventSchedulerComponent {
  event = {
    title: '',
    date: this.data.date,
    time: '',
  };

  constructor(
    public dialogRef: MatDialogRef<EventSchedulerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  saveEvent() {
    const eventDateTime = new Date(this.event.date);
    const [hours, minutes] = this.event.time.split(':');
    eventDateTime.setHours(+hours);
    eventDateTime.setMinutes(+minutes);

    this.dialogRef.close({
      title: this.event.title,
      start: eventDateTime,
    });
  }
}
