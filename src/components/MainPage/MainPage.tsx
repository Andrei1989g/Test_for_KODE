import React, {Dispatch, SetStateAction} from "react";
import style from "../../App.module.css"
import {Header} from "../Header";
import {SelectForm} from "./SelectForm/SelectForm";
import {NavLink} from "react-router-dom";
import {PaginationPage} from "../Pagination";

type AttacksType = {
    cost: string[]
    damage: string
    text: string
    name: string
    id: string
}
type WeaknessesType = {
    type: string[]
    value: string
    id: string
}
type AbilitiesType = {
    name: string
    text: string
    id: string
}
type ImagesType = {
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
type MainPagePropsType = {
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
export const MainPage = (props: MainPagePropsType) => {

    return <div>
        <Header/>
        <span className={style.mainPage}>
            <span>
                <SelectForm
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                    setPageSize={props.setPageSize}
                    setTotalItemsCount={props.setTotalItemsCount}
                    currentSubType={props.currentSubType}
                    currentType={props.currentType}
                    setCurrentSubType={props.setCurrentSubType}
                    setCurrentType={props.setCurrentType}
                    newPokemonData={props.newPokemonData}
                    setNewPokemonData={props.setNewPokemonData}/>
                </span>
            <div className={style.viewer}>
                {props.newPokemonData.map(el => {
                    return <div className={style.viewItem} key={el.id}>
                        <NavLink className={style.navLink} to={{pathname: `/pokemon/${el.id}`}}>
                            <img src={el.images.small} className={style.img} alt="avatar"/>
                            <div>{el.name}</div>
                            <div>{el.artist}</div>
                        </NavLink>
                    </div>
                })}
                </div>
        </span>
        <PaginationPage currentPage={props.currentPage}
                        setCurrentPage={props.setCurrentPage}
                        pageSize={props.pageSize}
                        totalItemsCount={props.totalItemsCount}/>
    </div>
}