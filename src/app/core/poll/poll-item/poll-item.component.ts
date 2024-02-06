import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollVm } from '../../../data-access/types';

@Component({
  selector: 'app-poll-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poll-item.component.html',
  styleUrl: './poll-item.component.scss',
})
export class PollItemComponent {
  @Input({ required: true }) pollCart!: PollVm;
}
