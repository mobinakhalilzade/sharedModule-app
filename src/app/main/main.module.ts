  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { HomeComponent } from './home/home.component';
  import {SharedModule} from "../shared/shared.module";
  import {MainRoutingModule} from "./main-routing.module";

  @NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      MainRoutingModule,
      SharedModule
    ]
  })
  export class MainModule { }
