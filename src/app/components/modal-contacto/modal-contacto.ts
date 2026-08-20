import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-contacto',
  imports: [],
  templateUrl: './modal-contacto.html',
  styleUrl: './modal-contacto.css',
})
export class ModalContacto {
  @Input() mostrar = false;

  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
