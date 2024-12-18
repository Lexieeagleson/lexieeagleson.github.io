import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Blank Sheet', description: 'A fool proof text page for my father', image: 'assets/text_on_img.png', url: "https://lexieeagleson.github.io/" },
    { title: 'Project Two', description: 'Description for project two.', image: 'assets/project-two.jpg' },
    { title: 'Project Three', description: 'Description for project three.', image: 'assets/project-three.jpg' },
    { title: 'Project 4', description: 'Description for project three.', image: 'assets/project-three.jpg' },
    { title: 'Project 5', description: 'Description for project three.', image: 'assets/project-three.jpg' },
    { title: 'Project 6', description: 'Description for project three.', image: 'assets/project-three.jpg' },
  ];

  constructor(private router: Router) {}

  navigateToProject(project: any) {
    window.open(project.url, '_blank');
    // this.router.navigate(["/"]).then(result=>{window.location.href = project.url;});
  }
}
