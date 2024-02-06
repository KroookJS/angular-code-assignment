import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollContainerComponent } from './poll-container.component';

describe('PollContainerComponent', () => {
  let component: PollContainerComponent;
  let fixture: ComponentFixture<PollContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
