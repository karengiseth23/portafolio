import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { ModalContacto } from '../modal-contacto/modal-contacto';
import { Translate } from "../translate/translate";


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ModalContacto, Translate],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mostrarModalContacto = false;

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

}
