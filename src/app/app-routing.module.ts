import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplayStoryComponent } from './display-story/display-story.component';
import { CreateStoryComponent } from './create-story/create-story.component';

const routes: Routes = [
  {path: '', component: DisplayStoryComponent, pathMatch: 'full'},
  {path: 'story/create', component: CreateStoryComponent, pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:  [RouterModule]
})
export class AppRoutingModule { }
