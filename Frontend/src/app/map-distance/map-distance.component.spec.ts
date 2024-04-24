import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDistanceComponent } from './map-distance.component';

describe('MapDistanceComponent', () => {
  let component: MapDistanceComponent;
  let fixture: ComponentFixture<MapDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapDistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
