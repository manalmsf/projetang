import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Define metadata for the EventDetailsComponent
@Component({
  selector: 'app-event-details', // Selector for this component
  templateUrl: './event-details.component.html', 
  styleUrls: ['./event-details.component.css'], 
})
export class EventDetailsComponent {
  // Constructor to inject dependencies
  constructor(
    public dialogRef: MatDialogRef<EventDetailsComponent>, 
    // Provides a reference to the dialog, allowing control over its state

    @Inject(MAT_DIALOG_DATA) public data: any
    // Injects the data passed to the dialog, making it available in this component
  ) {}

  
  closeDialog() {
    this.dialogRef.close(); 
    // Closes the dialog and optionally returns data to the parent component
  }
}
