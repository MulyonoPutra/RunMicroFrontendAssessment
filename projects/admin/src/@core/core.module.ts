import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BodyComponent } from './layout/components/body/body.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from 'material/src/lib/material.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { SubLevelMenuComponent } from './layout/components/sub-level-menu/sub-level-menu.component';

@NgModule({
  declarations: [LayoutComponent, BodyComponent, HeaderComponent, SidebarComponent, SubLevelMenuComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule.forRoot([]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LayoutComponent, BodyComponent, HeaderComponent, SidebarComponent, SubLevelMenuComponent]
})
export class CoreModule { }
