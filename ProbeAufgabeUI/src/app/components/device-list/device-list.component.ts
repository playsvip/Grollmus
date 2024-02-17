import { Component } from '@angular/core';
import { DeviceInformation } from '../../models/device-information';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent {
  public devices = [] as DeviceInformation[];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getAllDevices().subscribe((result: DeviceInformation[]) => this.HandleResult(result));
  }

  private HandleResult(result: DeviceInformation[]){
    this.devices = result;
  }
}
