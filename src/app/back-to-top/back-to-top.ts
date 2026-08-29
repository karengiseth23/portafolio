import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [CommonModule],
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})


export class BackToTop {
  showButton: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 200; // aparece después de 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
