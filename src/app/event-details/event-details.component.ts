import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Define metadata for the EventDetailsComponent
@Component({
  selector: 'app-event-details', // Selector for this component
  templateUrl: './event-details.component.html', // Path to the HTML template
  styleUrls: ['./event-details.component.css'], // Path to the CSS styles
})
export class EventDetailsComponent {
  // Constructor to inject dependencies
  constructor(
    public dialogRef: MatDialogRef<EventDetailsComponent>, 
    // Provides a reference to the dialog, allowing control over its state

    @Inject(MAT_DIALOG_DATA) public data: any
    // Injects the data passed to the dialog, making it available in this component
  ) {}

  // Method to close the dialog
  closeDialog() {
    this.dialogRef.close(); 
    // Closes the dialog and optionally returns data to the parent component
  }
}
