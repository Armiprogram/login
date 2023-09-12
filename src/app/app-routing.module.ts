import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DataComponent } from './components/data/data.component';
import { ChangeComponent } from './components/change/change.component';
import { LogsComponent } from './components/logs/logs.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'data',component: DataComponent},
  { path: 'change/:email', component: ChangeComponent },
  {path:'logs', component: LogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
