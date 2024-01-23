import { Component, Input } from '@angular/core';
import { ModalRedirectInterface } from '../../../interfaces/modalInterfaces';

@Component({
  selector: 'shared-modal-redirect',
  templateUrl: './modal-redirect.component.html',
  styleUrl: './modal-redirect.component.css',
})
export class ModalRedirectComponent {
  @Input()
  public modalData!: ModalRedirectInterface;
}
