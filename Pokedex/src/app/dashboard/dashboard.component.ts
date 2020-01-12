import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private headerTitle : string= "Pokèdex";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  setSearchedPokemon(searchtext : string) : void
  {
    this.router.navigate(["dashboard/" + searchtext]);
  }
}
