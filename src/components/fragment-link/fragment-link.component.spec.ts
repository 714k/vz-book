import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentLinkComponent } from './fragment-link.component';

describe('FragmentLinkComponent', () => {
  let component: FragmentLinkComponent;
  let fixture: ComponentFixture<FragmentLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragmentLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FragmentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
