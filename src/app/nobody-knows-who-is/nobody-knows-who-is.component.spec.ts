import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobodyKnowsWhoIsComponent } from './nobody-knows-who-is.component';

describe('NobodyKnowsWhoIsComponent', () => {
  let component: NobodyKnowsWhoIsComponent;
  let fixture: ComponentFixture<NobodyKnowsWhoIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobodyKnowsWhoIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobodyKnowsWhoIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
