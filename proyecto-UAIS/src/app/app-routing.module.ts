import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormComponent } from './schedule/form/form.component';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { ExpertLayoutComponent } from './components/expert-layout/expert-layout.component';
import { SearchengineComponent } from './searchengine/searchengine.component';
import { AuthGuard } from './routeguards/auth.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';



const routes: Routes = [
  /*{ path: '', component: FormComponent },*/
  { path: '', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profesional', component: ExpertLayoutComponent, canActivate: [AuthGuard] }, ///aqui se puso el guard
  { path: 'search', component: SearchengineComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: '**', component: NotfoundComponent,
    data: {
      title: 'Error'
    }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
