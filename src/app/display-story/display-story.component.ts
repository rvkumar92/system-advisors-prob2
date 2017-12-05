import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Story } from '../model/model';
import { StoryService } from '../story.service';
@Component({
  selector: 'app-display-story',
  templateUrl: './display-story.component.html',
  styleUrls: ['./display-story.component.css']
})
export class DisplayStoryComponent implements OnInit {
  stories: Story[];
  constructor(private storyService: StoryService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories().subscribe( 
          storiesList => {this.stories = storiesList; console.log(storiesList)},
          err => console.error(err)
        );
    this.changeRef.detectChanges();
  }

}
