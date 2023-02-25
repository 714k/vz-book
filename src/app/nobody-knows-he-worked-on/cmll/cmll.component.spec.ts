import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmllComponent } from './cmll.component';

describe('CmllComponent', () => {
  let component: CmllComponent;
  let fixture: ComponentFixture<CmllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
