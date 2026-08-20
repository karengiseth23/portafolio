import { Component } from '@angular/core';
import { Skill } from '../../models/skill';
import { SKILLS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly skills: Skill[] = SKILLS;

  get categories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
