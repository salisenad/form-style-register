import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToKnowBetterComponent } from './form-to-know-better.component';

describe('FormToKnowBetterComponent', () => {
  let component: FormToKnowBetterComponent;
  let fixture: ComponentFixture<FormToKnowBetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToKnowBetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToKnowBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
