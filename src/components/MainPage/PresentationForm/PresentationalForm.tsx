import React, {FC, memo, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "./PresentationalForm.module.css"
import {Header} from "../../Header/Header";
import {ResponseType} from "../types";
import {v1} from "uuid";
import {apiPokemonData} from "../../api/apiConfig/api-pokemonData";

export const PresentationalForm: FC = memo(() => {
    const [data, setData] = useState<ResponseType>()
    let params = useParams<{ id: string }>()

    useEffect(() => {
        apiPokemonData.getParam(params)
            .then(res => {
                setData(res.data.data)
            })
    }, [params, data])

    return <div className={style.viewField}>
        <Header isBack={true}/>
        <div className={style.window}>
            <img src={data && data.images.large} className={style.largeImg} alt="avatar"/>
            <div className={style.personalData}>
                <div><b>Pokemon name: </b>{data && data.name}</div>
                <div><b>Supertype: </b>{data && data.supertype}</div>
                <div><b>Types: </b>{data && data.types}</div>
                <div><b>SubTypes: </b>{data && data.subtypes}</div>
                <div>------------------------</div>
                {data && data.attacks?.map(data => {
                    return <div key={v1()}>
                        <div><b>Attack:</b></div>
                        <div>name: {data.name}</div>
                        <div>damage: {data.damage === "" ? 0 : data.damage}</div>
                        <div>cost: {data.cost}</div>
                    </div>;
                })}
                <div>------------------------</div>
                {data && data.weaknesses &&
                <div><b>Weaknesses:</b>{data.weaknesses?.map(weaknesses => {
                    return <div key={v1()}>
                        <div>type: {weaknesses.type}</div>
                        <div>value: {weaknesses.value}</div>
                    </div>
                })}</div>}
                <br/>
                <div><b>HP </b>:{data && data.hp}</div>
            </div>
        </div>
        {data && data.abilities &&
        <div className={style.description}>
            <b>Abilities:</b>
            {data.abilities.map(abilities => {
                return <div key={v1()}><b>{abilities.name}</b>: {abilities.text}</div>
            })}
        </div>}
        {data && data.attacks &&
        <div className={style.description}>
            <b>Attacks description:</b>
            {data.attacks.map(attacks => {
                return <div key={v1()}><b>{attacks.name}</b>: {attacks.text}</div>
            })}
        </div>}
    </div>
})

