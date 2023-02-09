import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTheBeginningComponent } from './at-the-beginning.component';

describe('AtTheBeginningComponent', () => {
  let component: AtTheBeginningComponent;
  let fixture: ComponentFixture<AtTheBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtTheBeginningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtTheBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
