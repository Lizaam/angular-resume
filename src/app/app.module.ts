import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { IntroSectionComponent } from './sections/intro-section/intro-section.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ResumeSectionComponent } from './sections/resume-section/resume-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { WorkSectionComponent } from './sections/work-section/work-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    IntroSectionComponent,
    LeftNavComponent,
    AboutSectionComponent,
    ResumeSectionComponent,
    ServicesSectionComponent,
    WorkSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
