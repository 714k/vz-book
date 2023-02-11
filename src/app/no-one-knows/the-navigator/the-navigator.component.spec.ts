import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNavigatorComponent } from './the-navigator.component';

describe('TheNavigatorComponent', () => {
  let component: TheNavigatorComponent;
  let fixture: ComponentFixture<TheNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
