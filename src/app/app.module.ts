import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsComponent } from './core/components/components.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { FilterComponent } from './core/components/filter/filter.component';
import { AgGridModule } from 'ag-grid-angular';

 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
 
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
  import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashbordComponent } from './core/components/dashbord/dashbord.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavBarComponent,
    FilterComponent,
    DashbordComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,MatMenuModule,
    DragDropModule,
    MatTabsModule,
  MatFormFieldModule,MatInputModule,MatStepperModule,ReactiveFormsModule,MatSidenavModule,MatListModule,
    BrowserAnimationsModule,MatToolbarModule,
    MatIconModule,FlexLayoutModule,HttpClientModule,AgGridModule.withComponents([]),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
