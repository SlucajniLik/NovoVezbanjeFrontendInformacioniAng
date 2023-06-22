import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRadnikeComponent } from './get-radnike.component';

describe('GetRadnikeComponent', () => {
  let component: GetRadnikeComponent;
  let fixture: ComponentFixture<GetRadnikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRadnikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRadnikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
