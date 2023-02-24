import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElMascaraComponent } from './el-mascara.component';

describe('ElMascaraComponent', () => {
  let component: ElMascaraComponent;
  let fixture: ComponentFixture<ElMascaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElMascaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElMascaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
