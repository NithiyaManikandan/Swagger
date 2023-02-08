import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherStepperComponent } from './another-stepper.component';

describe('AnotherStepperComponent', () => {
  let component: AnotherStepperComponent;
  let fixture: ComponentFixture<AnotherStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
