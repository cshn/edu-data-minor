import { Component, OnInit } from '@angular/core';
import { SchoolGrc } from '../school';
import { ActivatedRoute } from '@angular/router';
import { SchoolListService }  from '../school-service/school-list.service';

@Component({
  selector: 'app-dashboard-highlight',
  templateUrl: './dashboard-highlight.component.html',
  styleUrls: ['./dashboard-highlight.component.css']
})
export class DashboardHighlightComponent implements OnInit {
  schools: SchoolGrc[];
  searcht: string;

  constructor(private route: ActivatedRoute, private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getAllSchool();
  }

  getAllSchool(): void {
    this.schoolListService.getAllSchoolWithGrc().subscribe(schools => {
      this.schools = schools.sort((n1: SchoolGrc, n2: SchoolGrc) => {
        if(n1.school > n2.school) {
          return 1;
        } else {
          return -1;
        }
      });
    })
  }
}
