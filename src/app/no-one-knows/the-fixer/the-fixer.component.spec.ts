import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFixerComponent } from './the-fixer.component';

describe('TheFixerComponent', () => {
  let component: TheFixerComponent;
  let fixture: ComponentFixture<TheFixerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheFixerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheFixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
