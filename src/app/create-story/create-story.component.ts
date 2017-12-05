import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Story } from '../model/model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {
  storyForm: FormGroup;
  stories: Story[];

  constructor(private router: Router, private storyService: StoryService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.storyForm = new FormGroup({
      title: new FormControl(),
      user: new FormControl(),
      description: new FormControl(),
    });
  }

  submitForm(){
    console.log(this.storyForm);
    let newStory: Story;
    if(this.storyForm.value){
      newStory = this.storyForm.value;
      this.storyService.saveStory(newStory).subscribe();
      this.changeRef.detectChanges();
      this.storyService.getStories().subscribe(() => this.router.navigate(['']) );
    }
    this.resetForm();
  }

  resetForm(){
    this.storyForm.reset();
  }

}
