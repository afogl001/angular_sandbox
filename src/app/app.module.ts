import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { OutputComponent } from './basics/output/output.component';
import { InputComponent } from './basics/input/input.component';
import { NgifComponent } from './basics/ngif/ngif.component';
import { ViewChildComponent } from './basics/view-child/view-child.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { MyDirective } from './directives/directives.directive';
import { MyDirective2 } from './directives/directive2.directive';
import { MyDirective3 } from './directives/directive3.directive';
import { MyServiceComponent } from './services/my-service/my-service.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    OutputComponent,
    InputComponent,
    NgifComponent,
    ViewChildComponent,
    HeaderComponent,
    DirectivesComponent,
    MyDirective,
    MyDirective2,
    MyDirective3,
    MyServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
