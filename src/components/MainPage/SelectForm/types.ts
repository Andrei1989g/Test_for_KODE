import {Dispatch, SetStateAction} from "react";
import {ResponseType} from "../types";

export type SelectPropsType = {
    setNewPokemonData: Dispatch<SetStateAction<ResponseType[]>>
    newPokemonData: ResponseType[]
    currentSubType: string
    currentType: string
    setCurrentSubType: Dispatch<SetStateAction<string>>
    setCurrentType: Dispatch<SetStateAction<string>>
    setTotalItemsCount: Dispatch<SetStateAction<number>>
    setPageSize: Dispatch<SetStateAction<number>>
    setCurrentPage: (number: number) => void
    currentPage: number
}