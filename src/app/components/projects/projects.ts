import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects: Project[] = PROJECTS;
}
