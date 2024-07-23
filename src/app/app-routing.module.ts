import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SecurityGuard } from './admin/security.guard';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'padmin', component: AdminLoginComponent},
  { path: 'padmin/home', canActivate:[SecurityGuard], component: AdminHomeComponent},
  { path: 'noticias', component: NoticiasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
