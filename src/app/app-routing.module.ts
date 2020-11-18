import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'catalog', component: CatalogComponent },
      { path: 'users', component: TeamMembersComponent },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
