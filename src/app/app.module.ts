import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IntroComponent } from './sections/intro/intro.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { AboutComponent } from './sections/about/about.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ServicesComponent } from './sections/services/services.component';
import { WorkComponent } from './sections/work/work.component';
import { ProjectsComponent } from './sections/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    IntroComponent,
    LeftNavComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    WorkComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
