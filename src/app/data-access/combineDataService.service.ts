import { Injectable } from '@angular/core';
import { PollVm, CategoryMeta, Poll, PollCategory } from './types';

@Injectable({
  providedIn: 'root',
})
export class CombineDataService {
  mapResultvote(poll: Poll[], category: PollCategory[], metaCategiry: CategoryMeta[]): PollVm[] {
    return poll.map((poll: any) => {
      const pollCategory = category.find((category) => poll.category_id === category.id);
      const categoryMeta = metaCategiry.find((categoryMeta) =>
        pollCategory ? pollCategory.alias === categoryMeta.alias : false
      );
      return {
        ...poll,
        ...pollCategory,
        ...categoryMeta,
      };
    });
  }
}
