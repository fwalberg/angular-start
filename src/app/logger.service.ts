import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }

  mensagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }

  todosOsLogs() {
    console.log(this.mensagens);
  }
}
