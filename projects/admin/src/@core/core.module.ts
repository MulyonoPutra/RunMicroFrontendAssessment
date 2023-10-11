import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BodyComponent } from './layout/components/body/body.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';



@NgModule({
  declarations: [LayoutComponent, BodyComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
