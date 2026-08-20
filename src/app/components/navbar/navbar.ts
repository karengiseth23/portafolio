import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalContacto } from '../modal-contacto/modal-contacto';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ModalContacto],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mostrarModalContacto = false;
}
