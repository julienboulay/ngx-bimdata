import { Component } from '@angular/core';
import { BimdataModelConfig } from './ngx-bimdata/ngx-bimdata.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-bimdata';

  modelConfig: BimdataModelConfig = {
    modelIds: [15097],
    cloudId: 10344,
    projectId: 237466,
  }

  token = "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ";
}
