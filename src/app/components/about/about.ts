import { Component } from '@angular/core';
import { Skills } from "../skills/skills";
import { ModalContacto } from "../modal-contacto/modal-contacto";
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Skills, ModalContacto, RouterLink,],
  templateUrl: './about.html',
  styleUrl: './about.css',
})


export class About {
  mostrarModalContacto = false;

}
