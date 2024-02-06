import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyFilterComponent } from './categoty-filter.component';

describe('CategotyFilterComponent', () => {
  let component: CategotyFilterComponent;
  let fixture: ComponentFixture<CategotyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategotyFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategotyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
