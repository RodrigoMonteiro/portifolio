import { Component } from '@angular/core';

interface EducationType {
  firstLevelEducation: FirstEducation;
  secondLevelEducation: SecondEducation[];
}

interface FirstEducation {
  institute: string;
  instituleLogo: string;
  course: string;
  courseTotalHours: number;
  startedAt: string;
  endedAt: string;
  pathCourse: string;
}

interface SecondEducation {
  courseName: string;
  totalHours: number;
  coveredTopics: string[];
  plataform: string;
  courseImage: string;
  courseUrl: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

}
