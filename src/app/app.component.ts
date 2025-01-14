import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PollContainerComponent } from './core/poll/poll-container/poll-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, PollContainerComponent],
})
export class AppComponent {
  title = 'angular-code-assignment';
}
