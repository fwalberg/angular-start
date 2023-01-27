import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Davi Barros dos Santos";
  dataNascimento = "2014-06-29";
  urlImagem = "/assets/angular.png";

  mostrarDataNascimento() {
    alert(`A data de nascimento do Davi é: ${this.dataNascimento}`)
  }
}
