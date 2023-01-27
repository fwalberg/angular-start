import { Component } from '@angular/core';
import {Celular} from "../types/Celular";

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Celular XL", descricao: "Lançamento antecipado 2050", esgotado: false},
    { id: 2, nome: "Celular modesto", esgotado: true},
    { id: 3, nome: "Celular intermediário", descricao: "Lançamento antecipado 2040", esgotado: true}
  ]

}
