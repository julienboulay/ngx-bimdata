import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import makeBIMDataViewer from '@bimdata/viewer';

export interface BimdataModelConfig {
  cloudId: number;
  projectId: number;
  modelIds: number[];
}

export const SIMPLE_VIEWER_CONFIG =
{
  ui: {
    version: false,
    bimdataLogo: false,
  } as BDV.ViewerConfigUI,
  plugins: {
  } as BDV.ViewerConfigPlugins
}

@Component({
  selector: 'ngx-bimdata',
  template: `<div #viewer class="view-3d"></div>`,
  styleUrls: ['./ngx-bimdata.component.scss']
})
export class NgxBimdataComponent {

  @Input()
  config!: BimdataModelConfig

  @Input()
  token!: string;

  @ViewChild('viewer', { static: true })
  viewerElement!: ElementRef;

  @Output()
  modelsLoaded = new EventEmitter<void>();

  $viewer!: BDV.$Viewer;
  viewer!: BDV.Viewer;

  ngOnChanges(changes: SimpleChanges) {
    if (this.config && this.token && !this.$viewer) {
      this._initViewer(this.config, this.token);
    } else if (this.$viewer) {
      if (changes['token']?.currentValue) {
        this.viewer.setAccessToken(this.token)
      }
    }
  }

  private _initViewer(serviceConfig: BimdataModelConfig, accessToken: string) {
    
      const config: BDV.ViewerConfig = {
        api: {
          ...serviceConfig,
          accessToken
        },
        ...SIMPLE_VIEWER_CONFIG,
      } as unknown as BDV.ViewerConfig

      this.viewer = makeBIMDataViewer(config);

      this.viewer.registerPlugin({
        name: 'onViewerStart',
        startupScript: ($viewer: BDV.$Viewer) => {
          this.$viewer = $viewer;

          this.$viewer.globalContext.hub.on(
            "3d-model-loaded",
            () => this.modelsLoaded.next(),
          )
        }
      });

      this.viewer.mount(this.viewerElement.nativeElement);
  }

}
