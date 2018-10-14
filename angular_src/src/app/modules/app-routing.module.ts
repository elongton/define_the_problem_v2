import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { SignupComponent } from '../user/signup/signup.component';



const appRoutes: Routes = [
  // {path: '', redirectTo: '/user',   pathMatch: 'full'},
  {path: 'user', component: UserComponent, children: [
    {path: 'signup', component: SignupComponent}
  ]},
  // {path: 'organizations', component: OrganizationListComponent},
  // {path: 'programs', component: ProgramListComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{}
