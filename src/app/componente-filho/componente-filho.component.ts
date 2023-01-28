import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  //Recebendo informação do componente pai
  @Input() sobrenome = "";
  @Output() showFullName = new EventEmitter();
  nome = "";
}
