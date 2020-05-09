import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private RecentPokemonIdsKey : string = "RECENT_POKEMON_IDS";
  private MaxRecentSearches : number = 6;
  private recentPokemonSearchIdsSO = new BehaviorSubject<Array<number>>(this.getRecentSearches());
  public recentPokemonSearchIdsO = this.recentPokemonSearchIdsSO.asObservable();

  addRecentSearch(poekmonId : number) : Array<number>
  {
    let recentSearchesString = localStorage.getItem(this.RecentPokemonIdsKey);
    
    if(recentSearchesString === null)
    {
      this.updateRecentSearches("[" + poekmonId+ "]", Array<number>(poekmonId));
      let result = [poekmonId];
      return result;
    }

    let recentSearchesIds : Array<number> =  JSON.parse(recentSearchesString);
    if(recentSearchesIds.includes(poekmonId))
    {
      return recentSearchesIds;
    }

    let suffix : Array<number>;
    if(recentSearchesIds.length >= this.MaxRecentSearches)
    {
      suffix = recentSearchesIds.slice(0,this.MaxRecentSearches-1);
    }
    else
    {
      suffix = Object.assign([], recentSearchesIds);//Clone
    }

    recentSearchesIds = [];//clear
    recentSearchesIds.push(poekmonId);//push new Id
    let result = recentSearchesIds.concat(suffix);

    this.updateRecentSearches(JSON.stringify(result), result);
    return result;

  }

  updateRecentSearches(value : string, valueObj : Array<number>) : void
  {
    localStorage.setItem(this.RecentPokemonIdsKey, value);
    this.recentPokemonSearchIdsSO.next(valueObj);
    return;
  }

  getRecentSearches() : Array<number>
  {
    let recentSearchesString = localStorage.getItem(this.RecentPokemonIdsKey);
    if(recentSearchesString === null)
    {
      return [];
    }
    else
    {
      let recentSearchPokemonIds : Array<number> = JSON.parse(recentSearchesString);
      return recentSearchPokemonIds;
    }
  }

  clearLocalStorage()
  {
    localStorage.clear();
  }

  removceItem(key : string)
  {
    localStorage.removeItem(key);
  }
}
//