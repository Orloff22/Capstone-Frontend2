import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliasComponent } from './alias/alias.component';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reports', component: ReportsComponent},
  {path:'alias', component: AliasComponent},
  {path:'config', component: ConfigComponent},
  {path:'', redirectTo: './home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
