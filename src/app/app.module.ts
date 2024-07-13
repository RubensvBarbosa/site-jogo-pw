import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { TabsClassesComponent } from './components/tabsClasses/tabsClasses.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminCreateUserComponent } from './admin/admin-create-user/admin-create-user.component';
import { AdminPostNewsComponent } from './admin/admin-post-news/admin-post-news.component';
import { AdminManagementUserComponent } from './admin/admin-management-user/admin-management-user.component';


//ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      HeaderComponent,
      TabsClassesComponent,
      AdminLoginComponent,
      AdminHomeComponent,
      AdminCreateUserComponent,
      AdminPostNewsComponent,
      AdminManagementUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatTabsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
