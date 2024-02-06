import { combineLatest } from 'rxjs';
import { DataService } from '../data-access/types';

export function dataServiceFactory(dataService: DataService) {
  const categories$ = dataService.getCategories();
  const categoriesMeta$ = dataService.getCategoriesMeta();
  const polls$ = dataService.getPolls();
  return combineLatest([polls$, categories$, categoriesMeta$]);
}
