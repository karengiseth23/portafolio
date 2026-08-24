import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-home',
  standalone: true,
  imports: [],
  templateUrl: './loader-home.html',
  styleUrl: './loader-home.css',
})
export class LoaderHome implements OnInit {

  visible = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    const loaderShown = localStorage.getItem('loaderShown');

    if (!loaderShown) {
      this.visible = true;

      setTimeout(() => {
        this.visible = false;
        localStorage.setItem('loaderShown', 'true');
        this.cd.detectChanges();
      }, 3000);
    }
  }
}