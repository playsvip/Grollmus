import { Component, Input } from '@angular/core';
import { DeviceInformation } from '../../models/device-information';

@Component({
  selector: 'app-device-overview-tile',
  templateUrl: './device-overview-tile.component.html',
  styleUrl: './device-overview-tile.component.css'
})
export class DeviceOverviewTileComponent {

  @Input() public deviceInfo: DeviceInformation | undefined;

}
