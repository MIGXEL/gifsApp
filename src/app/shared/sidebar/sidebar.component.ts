import { Component } from '@angular/core';

import { Gif, SearchGifsResponse } from 'src/app/gifs/interface/gifs.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent {
	
	get historial(){

		return this.gifsService.historial;
	}

  	constructor( private gifsService: GifsService) { }

  
	buscar(termino: string){
		
		this.gifsService.buscarGifs(termino);
	}
}
