import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiBanamexComponent } from './citi-banamex.component';

describe('CitiBanamexComponent', () => {
  let component: CitiBanamexComponent;
  let fixture: ComponentFixture<CitiBanamexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiBanamexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiBanamexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
