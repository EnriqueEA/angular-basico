import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
    heroeBorrado: string = '';
    // borrado: boolean = false;

    constructor() {
        console.log('constructor');
    }

    borrarheroe(): void {
        this.heroeBorrado = this.heroes.shift() || '';
        // this.borrado = true;
    }
}
