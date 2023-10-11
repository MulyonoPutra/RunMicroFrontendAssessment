import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Components } from '../@components';
import { CoreModule } from '../@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'material/src/lib/material.module';
import { UserCollectionsComponent } from '../@modules/users/user-collections/user-collections.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Components,
    MaterialModule,
    CoreModule, HttpClientModule, UserCollectionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  , exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
