import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NissanLatinoamericaComponent } from './nissan-latinoamerica.component';

describe('NissanLatinoamericaComponent', () => {
  let component: NissanLatinoamericaComponent;
  let fixture: ComponentFixture<NissanLatinoamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NissanLatinoamericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NissanLatinoamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
