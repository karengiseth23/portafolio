import { Component } from '@angular/core';
import { Skills } from "../skills/skills";
import { ModalContacto } from "../modal-contacto/modal-contacto";
import { RouterLink} from '@angular/router';
import { Timeline } from "../timeline/timeline";

@Component({
  selector: 'app-about',
  imports: [Skills, ModalContacto, RouterLink, Timeline],
  templateUrl: './about.html',
  styleUrl: './about.css',
})


export class About {
  mostrarModalContacto = false;

}
