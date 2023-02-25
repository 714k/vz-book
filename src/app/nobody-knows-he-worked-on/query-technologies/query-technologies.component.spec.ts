import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTechnologiesComponent } from './query-technologies.component';

describe('QueryTechnologiesComponent', () => {
  let component: QueryTechnologiesComponent;
  let fixture: ComponentFixture<QueryTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
