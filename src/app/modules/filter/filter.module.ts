import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FormsModule } from '@angular/forms';
 
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule, AgGridModule.withComponents([]) 
  ]
})
export class FilterModule { }
