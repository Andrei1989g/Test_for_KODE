import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
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

export const ViewField = () => {
const [data,setData]=useState<ResponseType|null>(null)

    useEffect(()=>{
        instance.get(`cards/q=name:${params}`)
            .then(res=>setData(res.data.data))
    },[data])
    //Почему приходит только одно свойство объекта и как его вытянуть ?
    console.log(data)
    let params = useParams()
    const location = useLocation<string>();

//Как получить все данные ???
    console.log('params', params)
    console.log('useParams', useParams())
    console.log('location', location.state)
    // console.log('params', params)

    return <div className={style.viewItem}>
        <div className={style.viewMode}>
            <div className={style.largeImg}>
                blablabla
            </div>
            <div className={style.box}>
                <div className={style.personalData}>
                    <div>Pokemon name:{JSON.stringify(location.state)}</div>
                    <div>Supertype:</div>
                    <div>Types:</div>
                    <div>SubTypes:</div>
                    <br/>
                    <div>attackDamage:</div>
                    <div>attackCost:</div>
                    <div>weaknesses:</div>
                    <div>hp:</div>
                </div>
            </div>
            <div className={style.description}>
                textField description
            </div>
        </div>

        <>{/*<Header/>*/}
            {/*<div className={style.img}>blablabla</div>*/}
            {/*<div>*/}
            {/*    <div>Pokemon name</div>*/}
            {/*    <div>Supertype</div>*/}
            {/*    <div>Types</div>*/}
            {/*    <div>SubTypes</div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <div>attackDamage</div>*/}
            {/*    <div>attackCost</div>*/}
            {/*    <div>weaknesses</div>*/}
            {/*    <div>hp</div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    textField description*/}
            {/*</div>*/}

            {/*<div>Artist</div>*/}</>
    </div>
}