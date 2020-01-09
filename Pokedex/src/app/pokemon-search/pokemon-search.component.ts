import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  private searchText : string = "";
  @Output() private onSearchClick : EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit() {

  }

  onSearch() : void
  {
    if(this.searchText === null || this.searchText === "")
    {
      return;
    }

    this.onSearchClick.emit(this.searchText);
  }
}
