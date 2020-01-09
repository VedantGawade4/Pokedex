import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private headerTitle : string= "Pokèdex";
  private searchedPokemonText : string = "1";

  constructor() { }

  ngOnInit() {
  }

  setSearchedPokemon(searchtext : string) : void
  {
    this.searchedPokemonText = searchtext;
    //alert(searchtext);
  }
}
