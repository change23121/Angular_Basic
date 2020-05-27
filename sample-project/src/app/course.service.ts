import { MessagesService } from './messages.service';
import { COURSES } from './mock-courses';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 
  constructor(private MessagesService: MessagesService) { }

  getCourses() : Observable< Course[]>{
    this.MessagesService.add('CourseService: fetched COURSES');
    return of (COURSES);
  }
}
