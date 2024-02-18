import { Component, OnDestroy } from '@angular/core';
import { DeviceInformation } from '../../models/device-information';
import { DeviceService } from '../../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent implements OnDestroy {
  private supscription = new Subscription();

  protected deviceData = new DeviceInformation();

  protected tempString = "";
  protected failsageString = "Failsafe";
  protected temperaturString = "Temperatur";
  protected installString = "Einbauposition";
  protected insertIntoString = "Geeignet für 19\" Schrank";
  protected terminalString = "Terminal vorhanden";
  protected advancedString = "Erweiterte Umgebungsbedingungen";
  protected returnString = "<< Zurück";

  constructor(private deviceService: DeviceService,
    private activatedRoute: ActivatedRoute) { }

  public ngOnDestroy(): void {
    this.supscription?.unsubscribe();
  }

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('uid') as number | null;
    this.supscription = this.deviceService.getSingleDevice(id).subscribe((result: DeviceInformation) => this.handleResult(result));
  }

  private handleResult(deviceInfo: DeviceInformation): void {
    this.deviceData = deviceInfo;
    this.tempString = `${this.deviceData?.tempMin} - ${this.deviceData?.tempMax} °C`;
  }
}
