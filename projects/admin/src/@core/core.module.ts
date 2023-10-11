import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'material/src/lib/material.module';
import { BodyComponent } from './layout/components/body/body.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { SubLevelMenuComponent } from './layout/components/sub-level-menu/sub-level-menu.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, BodyComponent, HeaderComponent, SidebarComponent, SubLevelMenuComponent],
  imports: [
    CommonModule, MaterialModule,  RouterModule.forRoot([]),
  ],
  exports: [LayoutComponent, BodyComponent, HeaderComponent, SidebarComponent, SubLevelMenuComponent]
})
export class CoreModule { }
