import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizontalGridComponent, ImageSilderComponent, ScrollableTabComponent } from './components';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSilderComponent,
    HorizontalGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSilderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
