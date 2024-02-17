import { Component } from '@angular/core';
import { DeviceInformation } from '../../models/device-information';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent {
  public deviceData = [] as DeviceInformation;

  public ngOnInit(): void {
    this.deviceData = history.state;
  }
}
