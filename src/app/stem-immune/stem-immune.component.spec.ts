import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemImmuneComponent } from './stem-immune.component';

describe('StemImmuneComponent', () => {
  let component: StemImmuneComponent;
  let fixture: ComponentFixture<StemImmuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemImmuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemImmuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
