export interface PokemonDetails {
    abilities: Array<PokemonHabilities>,
    base_experience?: number, 
    forms?: Array<PokemonObject>,
    game_indices?: Array<PokemonIndices>,
    height?: number,
    held_items?: Array<Object>,
    id?: number,
    is_default?: boolean,
    location_area_encounters?: string,
    moves?: Array<Object>,
    name?: string,
    order?: number,
    past_types?: Array<Object>,
    species?: PokemonObject;
    sprites: TSprite,
    stats: Array<PokemonStats>,
    types?: Array<PokemonTypes>,
    weight?: number
}

type TSprite = {
    front_default: string,
    [key: string]: any
}

export interface PokemonObject {
    name?: string, 
    id?: string,
    url?: string
}

export interface PokemonHabilities {
    ability: PokemonObject,
    is_hidden: boolean,
    slot: number 
}

export interface PokemonIndices {
    game_index?: number,
    version?: Array<PokemonObject>, 
}

export interface PokemonStats {
    base_stat?: number,
    effort?: number,
    stat: PokemonObject, 
}

export interface PokemonTypes {
    slot?: number,
    type?: Array<PokemonObject>, 
}

