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
  getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Frontend': '/img/hojeada.png',
    'Backend / API': '/img/programador.png',
    'Diseño UI/UX': '/img/diseno-web.png',
    'Accesibilidad': '/img/diseno-web.png',
    'Herramientas': '/img/tools.png'
  };

  return icons[category] || '/img/tools.png'
}
}
