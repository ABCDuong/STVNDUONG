import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapClinicalComponent } from './snap-clinical.component';

describe('SnapClinicalComponent', () => {
  let component: SnapClinicalComponent;
  let fixture: ComponentFixture<SnapClinicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapClinicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
