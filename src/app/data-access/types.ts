import { Observable } from 'rxjs';

export type PollCategory = {
  id: number | null;
  name: string;
  alias?: string;
};

export type Poll = {
  id: number;
  title: string;
  points: number;
  voters_count: number;
  category_id: PollCategory['id'];
  image: string;
};

export type CategoryMeta = {
  name: string;
  alias: PollCategory['alias'];
  smallIcon: string;
  largeIcon: string;
  backgroundColor: string;
  textColor: string;
};

export type PollVm = {
  alias: string;
  backgroundColor: string;
  category_id: number;
  id: number;
  image: string;
  largeIcon: string;
  name: string;
  points: number;
  smallIcon: string;
  textColor: string;
  title: string;
  voters_count: number;
};

export type FilterCategory = {
  categoty_id: number | null;
  categoryName: string;
};

export type DataService = {
  getPolls(): Observable<Poll[]>;
  getCategories(): Observable<PollCategory[]>;
  getCategoriesMeta(): Observable<CategoryMeta[]>;
};
