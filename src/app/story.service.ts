import { Injectable } from '@angular/core';
import { Story } from './model/model';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import  'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StoryService {
  private storyUrl = 'api/stories';

  constructor(private http: HttpClient) { }
  
  getStories(): Observable<Story[]>{
      return this.http.get<Story[]>(this.storyUrl);
  }
  
  saveStory(story: Story): Observable<Story>{
    return this.http.post<Story>(this.storyUrl, story, httpOptions);
  }
  
}
