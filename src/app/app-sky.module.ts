

import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule,
  SkyCardModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import { AgGridModule } from 'ag-grid-angular';
import { SkyToolbarModule } from '@skyux/layout';
import {
  FormsModule
} from '@angular/forms';
import { SkyModalModule } from '@skyux/modals';


@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyCardModule,
    AgGridModule,
    SkyToolbarModule,
    FormsModule,
    SkyModalModule
  ]

})
export class AppSkyModule { }
