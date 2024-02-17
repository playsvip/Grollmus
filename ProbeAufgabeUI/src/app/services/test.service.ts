import { Injectable } from '@angular/core';
import { DeviceInformation } from '../models/device-information';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = "Device"
  constructor(private http: HttpClient) { }

  public getAllDevices(): Observable<DeviceInformation[]> {
    return this.http.get<DeviceInformation[]>(`${environment.apiUrl}/${this.url}`);
  }
}