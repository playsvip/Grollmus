import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceOverviewTileComponent } from './device-overview-tile.component';

describe('DeviceOverviewTileComponent', () => {
  let component: DeviceOverviewTileComponent;
  let fixture: ComponentFixture<DeviceOverviewTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeviceOverviewTileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeviceOverviewTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
