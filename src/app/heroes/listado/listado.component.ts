import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Antman']
  borrados: string []= []


  borrarHeroe() {
    const heroeBorrado = this.heroes.splice(-1,1);
    this.borrados.push(heroeBorrado.toString())
  }

  


  
  
}
