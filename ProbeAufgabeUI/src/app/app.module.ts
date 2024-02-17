import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceOverviewTileComponent } from './components/device-overview-tile/device-overview-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DetailViewComponent,
    DeviceListComponent,
    DeviceOverviewTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
