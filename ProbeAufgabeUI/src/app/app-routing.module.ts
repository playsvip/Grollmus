import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { DeviceInformation } from './models/device-information';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'detail', component: DetailViewComponent, data: DeviceInformation },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
