import {instance} from "./index";

export const apiPokemonData = {
    getPokemon({currentType,currentSubType,currentPage}:PokemonType){
        return instance.get(`cards?q=${currentType && 'types:' + currentType}
        ${currentSubType && ' subtypes:' + currentSubType}&page=${currentPage}&pageSize=6`)
    },
    getParam(params:ParamsType){
        return instance.get(`cards/${params.id}`)
    }
}

type PokemonType = {
    currentType:string
    currentSubType:string
    currentPage:number
}
type ParamsType = {
    id:string
}
