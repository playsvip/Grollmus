import { Component, OnDestroy } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { DeviceInformation } from '../../models/device-information';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent implements OnDestroy {
  constructor(private deviceService: DeviceService) { }

  private subscriptions = new Subscription();

  protected titleString = "Probeaufgabe - Holzner Christian - 16.02.2024 bis 18.02.2024";
  
  public allDevices = [] as DeviceInformation[];

  public ngOnInit(): void {
    this.subscriptions.add(this.deviceService.getAllDevices().subscribe((result: DeviceInformation[]) => this.handleResult(result)));
  }

  public ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  // TODO: it would be better to create an own component for the upload
  protected onFileChanged(event: any): void {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onload = () => {
      let deviceArray = [] as DeviceInformation[];
      const data = JSON.parse(fileReader.result as string);

      for (let i = 0; i < data?.devices.length; i++) {
        deviceArray.push(data?.devices[i] as DeviceInformation);
      }

      this.subscriptions.add(this.deviceService.setDevices(deviceArray).subscribe((result: DeviceInformation[]) => this.handleResult(result)));
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  private handleResult(result: DeviceInformation[]) {
    this.allDevices = result;
  }

}
