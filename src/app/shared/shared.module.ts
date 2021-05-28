import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    WelcomeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WelcomeComponent,
    FilterPipe
  ]
})
export class SharedModule { }
