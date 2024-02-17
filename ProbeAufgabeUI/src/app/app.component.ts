import { Component } from '@angular/core';
import { DeviceInformation } from './models/device-information';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  testDevice: DeviceInformation[] | undefined;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getAllDevices().subscribe((result: DeviceInformation[]) => this.HandleResult(result));
  }

  private HandleResult(result: DeviceInformation[]){
    this.testDevice = result;
    console.log(this.testDevice);
  }
}
