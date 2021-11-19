import {Dispatch, SetStateAction} from "react";

export type AttacksType = {
    cost: string[]
    damage: string
    text: string
    name: string
}
export type WeaknessesType = {
    type: string[]
    value: string
}
export type AbilitiesType = {
    name: string
    text: string
}
export type ImagesType = {
    small: string
    large: string
}
export type ResponseType = {
    types: string[]
    subtypes: string
    id: string
    name: string
    artist: string
    images: ImagesType
    attacks?: AttacksType[]
    supertype: string
    weaknesses?: WeaknessesType[]
    hp: number
    abilities?: AbilitiesType[]
}
export type MainPagePropsType = {
    //setNewPokemonData: Dispatch<SetStateAction<ResponseType[]>>
    setNewPokemonData: Dispatch<SetStateAction<ResponseType[]>>
    newPokemonData: ResponseType[]
    currentSubType: string
    currentType: string
    setCurrentSubType: Dispatch<SetStateAction<string>>
    setCurrentType: Dispatch<SetStateAction<string>>
    totalItemsCount: number
    setTotalItemsCount: Dispatch<SetStateAction<number>>
    setPageSize: Dispatch<SetStateAction<number>>
    pageSize: number
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
}