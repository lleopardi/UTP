import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  urlPokemon;
  onSelectedPokemon(url){
    console.log(url);

    this.urlPokemon = url;
  }
}
