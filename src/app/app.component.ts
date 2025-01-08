import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendarappli';
  toggleTheme() {

    // Add your theme toggling logic here

    console.log('Theme toggled');

  }
}
