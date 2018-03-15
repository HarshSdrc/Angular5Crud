import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSuccessComponent } from './call-success.component';

describe('CallSuccessComponent', () => {
  let component: CallSuccessComponent;
  let fixture: ComponentFixture<CallSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
