import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { heroDocumentDuplicate, heroArrowRight } from '@ng-icons/heroicons/outline';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIconsModule.withIcons({ heroDocumentDuplicate, heroArrowRight })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
