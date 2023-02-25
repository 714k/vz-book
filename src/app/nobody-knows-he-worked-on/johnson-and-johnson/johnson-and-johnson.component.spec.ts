import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnsonAndJohnsonComponent } from './johnson-and-johnson.component';

describe('JohnsonAndJohnsonComponent', () => {
  let component: JohnsonAndJohnsonComponent;
  let fixture: ComponentFixture<JohnsonAndJohnsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JohnsonAndJohnsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohnsonAndJohnsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
