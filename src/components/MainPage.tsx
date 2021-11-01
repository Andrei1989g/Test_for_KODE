import React from "react";
import style from "../App.module.css"
import {Header} from "./Header";
import {SelectForm} from "./Select";
import {NavLink} from "react-router-dom";

type AttacksType = {
    cost:string[]
    damage:string
    text:string
    name:string
}
type WeaknessesType = {
    type:string[]
    value:string
}
type AbilitiesType = {
    name:string
    text:string
}
export type ResponseType = {
    types: string[]
    subtypes: string
    id: string
    name: string
    artist: string
    images: {
        small: string
        large: string
    }
    attacks:AttacksType[]
    supertype:string
    weaknesses?:WeaknessesType[]
        hp:number
    abilities?:AbilitiesType[]
}

export const MainPage = () => {
    const [newPokemonData, setNewPokemonData] = React.useState<ResponseType[]>([]);

    return <div>
        <Header/>
        <span className={style.viewField}>
            <span>
                <SelectForm setNewPokemonData={setNewPokemonData}/>
                </span>
            <div className={style.viewer}>
                {newPokemonData?.map(el => {
                    //НЕОБХОДИМО ПЕРЕДАТЬ ДАННЫЕ из newPokemonData В КОМПОНЕНТУ ViewField
                    return <div /*onClick={() => handleOpen(el.id)}*/ className={style.viewItem} key={el.id}>
                        <NavLink to={{pathname: `/pokemon/${el.id}`}}>
                            <img src={el.images.small} className={style.img} alt="avatar"/>
                            <div>{el.name}</div>
                            <div>{el.artist}</div>
                        </NavLink>
                              </div>
                })}
                </div>

        </span>
    </div>
}