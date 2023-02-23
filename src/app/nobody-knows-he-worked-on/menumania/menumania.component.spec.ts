import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumaniaComponent } from './menumania.component';

describe('MenumaniaComponent', () => {
  let component: MenumaniaComponent;
  let fixture: ComponentFixture<MenumaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenumaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
