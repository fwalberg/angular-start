import {Component} from "@angular/core";

@Component({ //cria um novo componente
  selector: "app-primeiro-componente",
  template: "<h2> Primeiro Componente</h2>", //aqui pode passar o endereço do html também.
  styles: ["h2 { color: red;}"] // syteleUrls para setar um arquivo css
})
// Para ativar o component é preciso adicioná-lo ao arquivo app.module dentro das declarações
export class PrimeiroComponentComponent {

}
