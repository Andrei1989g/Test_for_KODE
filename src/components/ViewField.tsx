import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import style from "../App.module.css"
import {Header} from "./Header";
import {ResponseType} from "./MainPage";
import axios from "axios";
import {Paper} from "@mui/material";

const instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/',
    headers: {
        'X-Api-Key': '0ffac3b1-152b-46c3-9df9-b8e6a7685699'
    }
})

export const ViewField = () => {

    const [data, setData] = useState<ResponseType>()

    useEffect(() => {
        instance.get(`cards/${params.id}`)
            .then(res => {
                setData(res.data.data)
            })
    }, [])
    //Почему приходит только одно свойство объекта и как его вытянуть ?
    console.log(data)

    let params = useParams<{ id: string }>()
    //const location = useLocation<string>();

//history.back()

//Как получить все данные ???
    console.log('params', params)
    console.log('useParams', useParams())
    //console.log('location', location.state)
    // console.log('params', params)

    return <div className={style.viewField}>
        <Header/>
        <div className={style.window}>
            <img src={data && data.images.large} className={style.largeImg} alt="avatar"/>
            <div className={style.personalData}>
                <div><b>Pokemon name: </b>{data && data.name}</div>
                <div><b>Supertype: </b>{data && data.supertype}</div>
                <div><b>Types: </b>{data && data.types}</div>
                <div><b>SubTypes: </b>{data && data.subtypes}</div>
                <div>------------------------</div>
                {data && data.attacks.map(el => {
                    return <div>
                        <div><b>Attack:</b></div>
                        <div>name: {el.name}</div>
                        <div>damage: {el.damage === "" ? 0 : el.damage}</div>
                        <div>cost: {el.cost}</div>
                    </div>
                })}
                <div>------------------------</div>
                {data && data.weaknesses &&
                <div><b>Weaknesses:</b>{data.weaknesses?.map(el => {
                    return <div>
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
                return <div><b>{el.name}</b>: {el.text}</div>
            })}
        </div>}
        <div className={style.description}>
            <b>Attacks description:</b>
            {data && data.attacks.map(el => {
                return <div><b>{el.name}</b>: {el.text}</div>
            })}
        </div>
    </div>
}
