import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
@Injectable()
export class CourseService{


    constructor(public  http : HttpClient){
       
    }
    getCourses(): Observable<HttpResponse<Course[]>>{
        return this.http.get<Course[]>(
            'https://www.techskillsit.com/demo/courses', { observe: 'response' });
    }
    getCourse(id : Number) : Observable<HttpResponse<Course>> {
       return this.http.get<Course>('https://www.techskillsit.com/demo/course/' + id , { observe: 'response' });

    }
    postCourse(course : Course) : Observable<HttpResponse<Course>> {
        return this.http.post<Course>('https://www.techskillsit.com/demo/course/', course , { observe: 'response' });
 
     }
     deleteCourse(id : Number) : Observable<HttpResponse<Course>> {
        return this.http.delete<Course>('https://www.techskillsit.com/demo/course/'+id , { observe: 'response' });
 
     }
}