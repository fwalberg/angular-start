import { Component } from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  //Injetando o serviço
  constructor(public logger: LoggerService) {

  }
  descricao = "";

  adicionarDescricao() {
    //console.log(`A descrição do produto é ${this.descricao}`)
    this.logger.logar(`A descrição do produto é ${this.descricao}. Produto Adicionado!`);

  }

}
