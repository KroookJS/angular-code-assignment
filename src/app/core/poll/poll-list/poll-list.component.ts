import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollVm } from '../../../data-access/types';
import { BehaviorSubject } from 'rxjs';
import { WorkInProgressComponent } from '../../shared/work-in-progress/work-in-progress.component';
import { LoadingImageComponentComponent } from '../../shared/loading-image-component/loading-image-component.component';
import { PollItemComponent } from '../poll-item/poll-item.component';

@Component({
  selector: 'app-poll-list',
  standalone: true,
  templateUrl: './poll-list.component.html',
  styleUrl: './poll-list.component.scss',
  imports: [CommonModule, WorkInProgressComponent, LoadingImageComponentComponent, PollItemComponent],
})
export class PollListComponent {
  @Input({ required: true }) status!: string;
  @Input({ required: true }) dataFilterCombine$!: BehaviorSubject<PollVm[]>;
}
