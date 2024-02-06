import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollCategory } from '../../data-access/types';

@Component({
  selector: 'app-categoty-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoty-filter.component.html',
  styleUrl: './categoty-filter.component.scss',
})
export class CategotyFilterComponent {
  @Input({ required: true }) vlaue!: PollCategory;
  @Input({ required: true }) filters: PollCategory[] | null = [];

  @Output() valueSelected = new EventEmitter<PollCategory>();

  public selectedFilter: PollCategory | undefined;
  public isOpened = false;

  toggleFilterSelect(): void {
    this.isOpened = !this.isOpened;
  }

  onSelectToggle(filter: PollCategory): void {
    this.isOpened = false;
    this.selectedFilter = this.selectedFilter?.id === filter.id ? this.vlaue : filter;
    this.valueSelected.emit(this.selectedFilter);
  }
}
