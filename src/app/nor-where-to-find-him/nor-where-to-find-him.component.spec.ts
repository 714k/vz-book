import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorWhereToFindHimComponent } from './nor-where-to-find-him.component';

describe('NorWhereToFindHimComponent', () => {
  let component: NorWhereToFindHimComponent;
  let fixture: ComponentFixture<NorWhereToFindHimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorWhereToFindHimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorWhereToFindHimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
