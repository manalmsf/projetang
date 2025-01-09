import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Define metadata for the EventSchedulerComponent
@Component({
  selector: 'app-event-scheduler', // Selector for this component
  templateUrl: './event-scheduler.component.html', 
  styleUrls: ['./event-scheduler.component.css'], 
})
export class EventSchedulerComponent {
  // Object to hold the event details entered by the user
  event = {
    title: '', 
    date: this.data.date, 
    time: '', 
  };

  // Constructor to inject dependencies
  constructor(
    public dialogRef: MatDialogRef<EventSchedulerComponent>,
    // Reference to the dialog for controlling its behavior

    @Inject(MAT_DIALOG_DATA) public data: any
    // Inject the data passed to the dialog, making it accessible as `data`
  ) {}

 
  saveEvent() {
    const eventDateTime = new Date(this.event.date); 
    // Create a new Date object based on the selected date

    const [hours, minutes] = this.event.time.split(':'); 
    // Split the time string (e.g., "14:30") into hours and minutes

    eventDateTime.setHours(+hours); 
    // Set the hours on the event's date
    eventDateTime.setMinutes(+minutes); 
    // Set the minutes on the event's date

    // Close the dialog and pass the event data back to the parent component
    this.dialogRef.close({
      title: this.event.title, // Event title
      start: eventDateTime, // Combined date and time
    });
  }
}
