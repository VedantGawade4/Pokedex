
export interface ITrigger {
    name: string;
    url: string;
}

export interface IEvolutionDetail {
    gender?: any;
    held_item?: any;
    item?: any;
    known_move?: any;
    known_move_type?: any;
    location?: any;
    min_affection?: any;
    min_beauty?: any;
    min_happiness?: any;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species?: any;
    party_type?: any;
    relative_physical_stats?: any;
    time_of_day: string;
    trade_species?: any;
    trigger: ITrigger;
    turn_upside_down: boolean;
}

export interface ISpeciesDetails {
    name: string;
    url: string;
}

export interface IEvolvesTo {
    evolution_details: IEvolutionDetail[];
    evolves_to: IEvolvesTo[];
    is_baby: boolean;
    species: ISpeciesDetails;
}

export interface IChain {
    evolution_details: any[];
    evolves_to: IEvolvesTo[];
    is_baby: boolean;
    species: ISpeciesDetails;
}

export interface IEvolutionChain {
    baby_trigger_item?: any;
    chain: IChain;
    id: number;
}


