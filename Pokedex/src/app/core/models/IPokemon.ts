
    export interface IAbilityDetail {
        name: string;
        url: string;
    }

    export interface IAbility {
        ability: IAbilityDetail;
        is_hidden: boolean;
        slot: number;
    }

    export interface IForm {
        name: string;
        url: string;
    }

    export interface IVersion {
        name: string;
        url: string;
    }

    export interface IGameIndice {
        game_index: number;
        version: IVersion;
    }

    export interface IItem {
        name: string;
        url: string;
    }

    export interface IVersionDetail {
        rarity: number;
        version: IVersion;
    }

    export interface IHeldItem {
        item: IItem;
        version_details: IVersionDetail[];
    }

    export interface IMoveDetail {
        name: string;
        url: string;
    }

    export interface IMoveLearnMethod {
        name: string;
        url: string;
    }

    export interface IVersionGroup {
        name: string;
        url: string;
    }

    export interface IVersionGroupDetail {
        level_learned_at: number;
        move_learn_method: IMoveLearnMethod;
        version_group: IVersionGroup;
    }

    export interface IMove {
        move: IMoveDetail;
        version_group_details: IVersionGroupDetail[];
    }

    export interface ISpecies {
        name: string;
        url: string;
    }

    export interface ISprites {
        back_default: string;
        back_female?: any;
        back_shiny: string;
        back_shiny_female?: any;
        front_default: string;
        front_female?: any;
        front_shiny: string;
        front_shiny_female?: any;
    }

    export interface IStatDetail {
        name: string;
        url: string;
    }

    export interface IStat {
        base_stat: number;
        effort: number;
        stat: IStatDetail;
    }

    export interface ITypeDetail {
        name: string;
        url: string;
    }

    export interface IType {
        slot: number;
        type: ITypeDetail;
    }

    export interface IPokemon {
        abilities: IAbility[];
        base_experience: number;
        forms: IForm[];
        game_indices: IGameIndice[];
        height: number;
        held_items: IHeldItem[];
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: IMove[];
        name: string;
        order: number;
        species: ISpecies;
        sprites: ISprites;
        stats: IStat[];
        types: IType[];
        weight: number;
    }
