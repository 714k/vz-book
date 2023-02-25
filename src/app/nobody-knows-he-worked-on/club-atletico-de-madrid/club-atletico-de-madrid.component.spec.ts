import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAtleticoDeMadridComponent } from './club-atletico-de-madrid.component';

describe('ClubAtleticoDeMadridComponent', () => {
  let component: ClubAtleticoDeMadridComponent;
  let fixture: ComponentFixture<ClubAtleticoDeMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubAtleticoDeMadridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubAtleticoDeMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
