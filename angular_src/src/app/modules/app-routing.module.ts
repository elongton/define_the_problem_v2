import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from '../users/users.component';



const appRoutes: Routes = [
  // {path: '', redirectTo: '/users',   pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
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