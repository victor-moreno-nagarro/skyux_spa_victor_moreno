import { NewUserComponent } from './demo/newUser/new-user.component';
import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import { AgGridModule } from 'ag-grid-angular';
import { SkyToolbarModule } from '@skyux/layout';
import { FormsModule } from '@angular/forms';
import { SkyModalConfiguration, SkyModalHostService, SkyModalInstance, SkyModalModule } from '@skyux/modals';
import {
  CommonModule
} from '@angular/common';

import {
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyInputBoxModule
} from '@skyux/forms';

import {
  SkyThemeModule,
  SkyThemeService
} from '@skyux/theme';

import {
  SkyDropdownModule
} from '@skyux/popovers';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    SkyToolbarModule,
    FormsModule,
    SkyModalModule,
    SkyDatepickerModule,
    SkyInputBoxModule,
    SkyThemeModule,
    SkyDropdownModule
  ],
  exports: [
    AppSkyModule,
    SkyDatepickerModule,
    SkyInputBoxModule,
    SkyDropdownModule
  ],
  entryComponents: [
    NewUserComponent
  ],
  providers: [
    SkyThemeService,
    SkyModalInstance,
    SkyModalHostService,
    SkyModalConfiguration
  ]
})
export class AppExtrasModule { }
