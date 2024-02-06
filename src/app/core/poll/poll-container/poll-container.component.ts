import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, take, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PollCategory, PollVm } from '../../../data-access/types';
import { CombineDataService } from '../../../data-access/combineDataService.service';
import { ApiMockService } from '../../../data-access/api-mock.service';
import { CategotyFilterComponent } from '../../categoty-filter/categoty-filter.component';
import { PollListComponent } from '../poll-list/poll-list.component';

@Component({
  selector: 'app-poll-container',
  standalone: true,
  templateUrl: './poll-container.component.html',
  styleUrl: './poll-container.component.scss',
  imports: [CommonModule, CategotyFilterComponent, PollListComponent],
})
export class PollContainerComponent implements OnInit, OnDestroy {
  private readonly dataCombine$: BehaviorSubject<any> = new BehaviorSubject([]);
  private readonly destroy$ = new Subject();

  public readonly categories$ = new BehaviorSubject<PollCategory[] | null>([]);
  public readonly dataFilterCombine$ = new BehaviorSubject<PollVm[]>([]);
  public status: string = 'loading';

  constructor(
    @Inject('DataServiceCombined') private combinedData: Observable<any>,
    private combineDataService: CombineDataService,
    private readonly apiMockService: ApiMockService
  ) {}

  ngOnInit(): void {
    this.loadAllPolls();
    this.loadedCategory();

    setTimeout(() => {
      this.filterPollById();
      this.status = 'loaded';
    }, 5000);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  handleFilteEvent(filterEvent: PollCategory): void {
    if (filterEvent.id === null) {
      this.filterPollById();
    } else {
      this.filterPollById(filterEvent.id);
    }
  }

  loadAllPolls(): void {
    this.combinedData
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(([data1, data2, data3]) =>
        this.dataCombine$.next(this.combineDataService.mapResultvote(data1, data2, data3))
      );
  }

  loadedCategory(): void {
    this.apiMockService
      .getCategories()
      .pipe(tap(), takeUntil(this.destroy$))
      .subscribe((category) => {
        return this.categories$.next(category);
      });
  }

  filterPollById(filterId?: number | null): void {
    this.dataCombine$
      .pipe(
        map((data: PollVm[]) => {
          if (filterId) return data.filter((el) => el.category_id === filterId);
          else return this.dataCombine$.value;
        }),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => this.dataFilterCombine$.next(value));
  }
}
