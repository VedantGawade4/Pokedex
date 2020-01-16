import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/services/local-storage.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private headerTitle : string= "Pokèdex";
  private recentPokemonSearchIdsO : Observable<Array<number>>;

  constructor(private localStorageService : LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.localStorageService.recentPokemonSearchIdsO.subscribe(
      idArray => {  this.recentPokemonSearchIdsO = of(idArray); }
    );
  }

  setSearchedPokemon(searchtext : string) : void
  {
    this.router.navigate(["dashboard/" + searchtext]);
  }
}
