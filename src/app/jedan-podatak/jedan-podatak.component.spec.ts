import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedanPodatakComponent } from './jedan-podatak.component';

describe('JedanPodatakComponent', () => {
  let component: JedanPodatakComponent;
  let fixture: ComponentFixture<JedanPodatakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JedanPodatakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JedanPodatakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
