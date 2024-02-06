import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-image-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-image-component.component.html',
  styleUrl: './loading-image-component.component.scss',
})
export class LoadingImageComponentComponent {
  @Input() srcImg!: string;
}
