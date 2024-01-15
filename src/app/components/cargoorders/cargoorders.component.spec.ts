import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoordersComponent } from './cargoorders.component';

describe('CargoordersComponent', () => {
  let component: CargoordersComponent;
  let fixture: ComponentFixture<CargoordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
