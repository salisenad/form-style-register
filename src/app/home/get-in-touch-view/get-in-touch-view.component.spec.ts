import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInTouchViewComponent } from './get-in-touch-view.component';

describe('GetInTouchViewComponent', () => {
  let component: GetInTouchViewComponent;
  let fixture: ComponentFixture<GetInTouchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInTouchViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInTouchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
