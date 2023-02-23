import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNavigationComponent } from './projects-navigation.component';

describe('ProjectsNavigationComponent', () => {
  let component: ProjectsNavigationComponent;
  let fixture: ComponentFixture<ProjectsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
