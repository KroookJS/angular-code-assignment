import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingImageComponentComponent } from './loading-image-component.component';

describe('LoadingImageComponentComponent', () => {
  let component: LoadingImageComponentComponent;
  let fixture: ComponentFixture<LoadingImageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingImageComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingImageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
