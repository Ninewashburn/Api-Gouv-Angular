import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegionIndexComponent} from './region-index/region-index.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { DepartmentIndexComponent } from './department-index/department-index.component';
import { CommunesIndexComponent } from './communes-index/communes-index.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionIndexComponent,
    DepartmentIndexComponent,
    CommunesIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
