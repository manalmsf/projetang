import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventSchedulerComponent } from '../event-scheduler/event-scheduler.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

// Define the metadata for the CalendarComponent
@Component({
  selector: 'app-calendar', // Selector used to include this component in templates
  templateUrl: './calendar.component.html', // Path to the HTML template
  styleUrls: ['./calendar.component.css'], // Path to the CSS styles
})
export class CalendarComponent {
  // Current date for viewing the calendar
  viewDate: Date = new Date();

  // Initial set of events
  events = [
    {
      start: new Date(), // Start date and time of the event
      title: 'Sample Event', // Title of the event
    },
  ];

  // Inject the MatDialog service for opening dialogs
  constructor(private dialog: MatDialog) {}

  // Method to handle day clicks and open the EventSchedulerComponent
  onDayClick(day: any) {
    const dialogRef = this.dialog.open(EventSchedulerComponent, {
      width: '400px', // Width of the dialog
      data: { date: day.date }, // Pass the selected day's date to the dialog
    });

    // After the dialog closes, add the event to the list if a result is returned
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.events.push(result); // Add the new event to the events array
      }
    });
  }

  // Method to handle event clicks and open the EventDetailsComponent
  onEventClick(event: any) {
    this.dialog.open(EventDetailsComponent, {
      width: '400px', // Width of the dialog
      data: event, // Pass the selected event data to the dialog
    });
  }

  // Generate all days in the current month
  getDaysInMonth(): Date[] {
    const days: Date[] = []; // Array to store all days in the month
    const date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1); // Start at the first day of the month

    // Loop through all days in the month
    while (date.getMonth() === this.viewDate.getMonth()) {
      days.push(new Date(date)); // Add the current date to the array
      date.setDate(date.getDate() + 1); // Move to the next day
    }

    return days; // Return the array of dates
  }

  // Check if a given date is today
  isToday(date: Date): boolean {
    const today = new Date(); // Get today's date
    return (
      date.getDate() === today.getDate() && // Compare day
      date.getMonth() === today.getMonth() && // Compare month
      date.getFullYear() === today.getFullYear() // Compare year
    );
  }

  // Get all events for a specific day
  getEventsForDay(date: Date): any[] {
    return this.events.filter(
      (event) =>
        new Date(event.start).toDateString() === date.toDateString() // Compare event start date with the given date
    );
  }
}
