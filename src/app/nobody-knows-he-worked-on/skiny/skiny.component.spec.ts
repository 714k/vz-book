import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinyComponent } from './skiny.component';

describe('SkinyComponent', () => {
  let component: SkinyComponent;
  let fixture: ComponentFixture<SkinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
