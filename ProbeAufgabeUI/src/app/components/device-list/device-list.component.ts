import { Component, Input } from '@angular/core';
import { DeviceInformation } from '../../models/device-information';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent {
  protected stringNoDevices = "Keine Geräte vorhanden";
  
  @Input() public devices = [] as DeviceInformation[];

  public deleteItem(result: DeviceInformation[]): void {
    this.devices = result;
  }
}
