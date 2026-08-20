import { Component } from '@angular/core';
import { Experiencie as ExperiencieModel } from '../../models/experiencie';
import { EXPERIENCE } from '../../data/experiences';
import { Timeline } from "../timeline/timeline";
@Component({
  selector: 'app-experience',
  imports: [Timeline],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experiences: ExperiencieModel[] = EXPERIENCE;
}
