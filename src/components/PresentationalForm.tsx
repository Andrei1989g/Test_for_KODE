import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import style from "../App.module.css"
import {Header} from "./Header";
import {ResponseType} from "./MainPage";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
    headers: {
        'X-Api-Key': '0ffac3b1-152b-46c3-9df9-b8e6a7685699'
    }
})

export const PresentationalForm = () => {
    const [data, setData] = useState<ResponseType>()
    let params = useParams<{ id: string }>()

    useEffect(() => {
        instance.get(`cards/${params.id}`)
            .then(res => {
                setData(res.data.data)
            })
    }, [data])

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
                {data && data.attacks.map(el => {
                    return <div key={el.id}>
                        <div><b>Attack:</b></div>
                        <div>name: {el.name}</div>
                        <div>damage: {el.damage === "" ? 0 : el.damage}</div>
                        <div>cost: {el.cost}</div>
                    </div>
                })}
                <div>------------------------</div>
                {data && data.weaknesses &&
                <div><b>Weaknesses:</b>{data.weaknesses?.map(el => {
                    return <div key={el.id}>
                        <div>type: {el.type}</div>
                        <div>value: {el.value}</div>
                    </div>
                })}</div>}
                <br/>
                <div><b>HP </b>:{data && data.hp}</div>
            </div>
        </div>
        {data && data.abilities &&
        <div className={style.description}>
            <b>Abilities:</b>
            {data.abilities.map(el => {
                return <div key={el.id}><b>{el.name}</b>: {el.text}</div>
            })}
        </div>}
        <div className={style.description}>
            <b>Attacks description:</b>
            {data && data.attacks.map(el => {
                return <div key={el.id}><b>{el.name}</b>: {el.text}</div>
            })}
        </div>
    </div>
}
