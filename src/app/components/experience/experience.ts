import { Component } from '@angular/core';
import { Experiencie as ExperiencieModel } from '../../models/experiencie';
import { EXPERIENCE } from '../../data/experiences';
@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experiences: ExperiencieModel[] = EXPERIENCE;
}
