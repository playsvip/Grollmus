import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { DeviceInformation } from '../../models/device-information';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  constructor(private deviceService: DeviceService) { }

  protected onFileChanged(event: any): void {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onload = () => {
      let deviceArray = [] as DeviceInformation[];
      const data =  JSON.parse(fileReader.result as string);
      
      for(let i = 0; i < data?.devices.length; i++){
        deviceArray.push(data?.devices[i] as DeviceInformation);
      }

     // console.log(deviceArray);
      this.deviceService.setDevices(deviceArray).subscribe((result: DeviceInformation[]) => this.HandleResult(result));
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  private HandleResult(result: DeviceInformation[]){
  // make get here dont allways get new data
}

}
