import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRadnikeComponent } from './update-radnike.component';

describe('UpdateRadnikeComponent', () => {
  let component: UpdateRadnikeComponent;
  let fixture: ComponentFixture<UpdateRadnikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRadnikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRadnikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
