import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneshComponent } from './ganesh.component';

describe('GaneshComponent', () => {
  let component: GaneshComponent;
  let fixture: ComponentFixture<GaneshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaneshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaneshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
