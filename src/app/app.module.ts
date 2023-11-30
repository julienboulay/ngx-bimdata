import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxBimdataComponent } from './ngx-bimdata/ngx-bimdata.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxBimdataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
