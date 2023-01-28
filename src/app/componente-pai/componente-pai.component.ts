import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  sobrenome = "Batista";

  //Disparando eventos - nome completo - através do elemento filho.
  mostrarNomeCompelto(nomeCompleto: any) {
    alert(`O nome completo é: ${nomeCompleto}`);
  }
}
