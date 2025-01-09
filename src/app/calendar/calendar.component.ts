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
      start: new Date(), 
      title: 'Sample Event', 
    },
  ];

  // Inject the MatDialog 
  constructor(private dialog: MatDialog) {}

  // Method to handle day clicks and open the EventSchedulerComponent
  onDayClick(day: any) {
    const dialogRef = this.dialog.open(EventSchedulerComponent, {
      width: '400px', 
      data: { date: day.date }, // Pass the selected day's date to the dialog
    });

    //result apres ferm
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.events.push(result); // Add the new event to the events array
      }
    });
  }

  // Method to handle event clicks and open the EventDetailsComponent
  onEventClick(event: any) {
    this.dialog.open(EventDetailsComponent, {
      width: '400px', 
      data: event, // Pass the selected event data to the dialog
    });
  }

  // Generate all days in the current month
  getDaysInMonth(): Date[] {
    const days: Date[] = []; 
    const date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1); // Start at the first day of the month

    // Loop through all days in the month
    while (date.getMonth() === this.viewDate.getMonth()) {
      days.push(new Date(date)); // Add the current date to the array
      date.setDate(date.getDate() + 1); // Move to the next day
    }

    return days; 
  }

  // Check if a given date is today
  isToday(date: Date): boolean {
    const today = new Date(); // Get today's date
    return (
      date.getDate() === today.getDate() && 
      date.getMonth() === today.getMonth() && 
      date.getFullYear() === today.getFullYear() 
    );
  }

  // Get all events for a specific day
  getEventsForDay(date: Date): any[] {
    return this.events.filter(
      (event) =>
        new Date(event.start).toDateString() === date.toDateString() 
    );
  }
}
