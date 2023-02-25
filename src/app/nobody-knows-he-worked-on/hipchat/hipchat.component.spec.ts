import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipchatComponent } from './hipchat.component';

describe('HipchatComponent', () => {
  let component: HipchatComponent;
  let fixture: ComponentFixture<HipchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
