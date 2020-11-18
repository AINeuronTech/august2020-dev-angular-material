import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HtmlCssComponent } from './html-css/html-css.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { LoginChildComponent } from './login-child/login-child.component';
import { FormsModule } from '@angular/forms';
import { MembersService } from './members.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { PriceComponent } from './price/price.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { UsersService } from './users.service';
import { MemberDetailsComponent } from './member-details/member-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HtmlCssComponent,
    LoginComponent,
    CatalogComponent,
    HomeComponent,
    LoginChildComponent,
    PriceComponent,
    TeamMembersComponent,
    MemberDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [MembersService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
