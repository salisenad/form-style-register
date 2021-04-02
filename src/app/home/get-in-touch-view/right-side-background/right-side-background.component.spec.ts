import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBackgroundComponent } from './right-side-background.component';

describe('RightSideBackgroundComponent', () => {
  let component: RightSideBackgroundComponent;
  let fixture: ComponentFixture<RightSideBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
