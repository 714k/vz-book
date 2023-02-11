import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAmarillaComponent } from './seccion-amarilla.component';

describe('SeccionAmarillaComponent', () => {
  let component: SeccionAmarillaComponent;
  let fixture: ComponentFixture<SeccionAmarillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAmarillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAmarillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
