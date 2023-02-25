import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaffroloteComponent } from './saffrolote.component';

describe('SaffroloteComponent', () => {
  let component: SaffroloteComponent;
  let fixture: ComponentFixture<SaffroloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaffroloteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaffroloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
