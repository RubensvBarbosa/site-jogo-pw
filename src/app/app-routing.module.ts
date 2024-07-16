import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SecurityGuard } from './admin/security.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'padmin', component: AdminLoginComponent},
  { path: 'padmin/home', canActivate:[SecurityGuard], component: AdminHomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
