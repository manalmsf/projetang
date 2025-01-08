import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventSchedulerComponent } from '../event-scheduler/event-scheduler.component';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  viewDate: Date = new Date();
  events = [
    {
      start: new Date(),
      title: 'Sample Event',
    },
  ];

  constructor(private dialog: MatDialog) {}

  // Method to open the event scheduler dialog
  onDayClick(day: any) {
    const dialogRef = this.dialog.open(EventSchedulerComponent, {
      width: '400px',
      data: { date: day.date },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.events.push(result);
      }
    });
  }
  
  
  onEventClick(event: any) {
    this.dialog.open(EventDetailsComponent, {
      width: '400px',
      data: event,
    });
  }
  
  // Generate all days in the current month
  getDaysInMonth(): Date[] {
    const days: Date[] = [];
    const date = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    while (date.getMonth() === this.viewDate.getMonth()) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  // Check if a given date is today
  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  // Get events for a specific day
  getEventsForDay(date: Date): any[] {
    return this.events.filter(
      (event) =>
        new Date(event.start).toDateString() === date.toDateString()
    );
  }
}
