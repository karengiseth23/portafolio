import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalContacto } from '../modal-contacto/modal-contacto';
import { Translate } from "../translate/translate";
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ModalContacto, Translate, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mostrarModalContacto = false;
  menuOpen = false;
  isDark = false;

  constructor() {
    const theme = localStorage.getItem('theme') || 'karen';

    document.documentElement.setAttribute('data-theme', theme);

    this.isDark = theme === 'karen-dark';
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;

    const theme = this.isDark ? 'karen-dark' : 'karen';

    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }

  toggleMenu() {
  this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
