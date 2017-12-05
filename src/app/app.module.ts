import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateStoryComponent } from './create-story/create-story.component';
import { DisplayStoryComponent } from './display-story/display-story.component';
import { StoryService } from './story.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateStoryComponent,
    DisplayStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false }
    )
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
