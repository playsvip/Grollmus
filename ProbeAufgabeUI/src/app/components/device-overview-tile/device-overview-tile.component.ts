import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DeviceInformation } from '../../models/device-information';
import { DeviceService } from '../../services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-overview-tile',
  templateUrl: './device-overview-tile.component.html',
  styleUrl: './device-overview-tile.component.css'
})
export class DeviceOverviewTileComponent implements OnDestroy {
  private subscription = new Subscription();

  protected failsafeString = "Failsafe: ";

  @Input() public deviceInfo = new DeviceInformation();
  @Output() public deleteItemEvent = new EventEmitter<DeviceInformation[]>();

  constructor(private deviceService: DeviceService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  protected onRemove(): void {
    this.subscription = this.deviceService.removeDevice(this.deviceInfo.uid as number).subscribe((result: DeviceInformation[]) => this.deleteResult(result));
  }

  private deleteResult(result: DeviceInformation[]): void {
    this.deleteItemEvent.emit(result);
  }
}
