import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsAndBottomsComponent } from './tops-and-bottoms.component';

describe('TopsAndBottomsComponent', () => {
  let component: TopsAndBottomsComponent;
  let fixture: ComponentFixture<TopsAndBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopsAndBottomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopsAndBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
