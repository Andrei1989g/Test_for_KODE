import * as React from 'react';
import {Dispatch, SetStateAction, useEffect} from 'react';
import {SelectChangeEvent} from '@mui/material/Select';
import style from "../../../App.module.css";
import axios from "axios";
import {ResponseType} from "../MainPage";
import {SelectElement} from './SelectElement/SelectElement';

type SelectPropsType = {
    setNewPokemonData: Dispatch<SetStateAction<ResponseType[]>>
    newPokemonData: ResponseType[]
    currentSubType: string
    currentType: string
    setCurrentSubType: Dispatch<SetStateAction<string>>
    setCurrentType: Dispatch<SetStateAction<string>>
    setTotalItemsCount: Dispatch<SetStateAction<number>>
    setPageSize: Dispatch<SetStateAction<number>>
    setCurrentPage: Dispatch<SetStateAction<number>>
    currentPage: number
}
export const SelectForm = (props: SelectPropsType) => {
    const [types, setTypes] = React.useState<string[]>([]);
    const [subTypes, setSubTypes] = React.useState<string[]>([]);

    const instance = axios.create({
        baseURL: 'https://api.pokemontcg.io/v2/',
        headers: {
            'X-Api-Key': '0ffac3b1-152b-46c3-9df9-b8e6a7685699'
        }
    })

    const handleChangeType = (event: SelectChangeEvent) => {
        props.setCurrentType(event.target.value);
        localStorage.setItem("currentType", JSON.stringify(event.target.value))
        localStorage.setItem("currentPage", JSON.stringify(1))
        props.setCurrentPage(1)
    };
    const handleChangeSubType = (event: SelectChangeEvent) => {
        props.setCurrentSubType(event.target.value);
        localStorage.setItem("currentSubType", JSON.stringify(event.target.value))
        localStorage.setItem("currentPage", JSON.stringify(1))
        props.setCurrentPage(1)
    };

    useEffect(() => {
        instance.get(`cards?q=${props.currentType && 'types:' + props.currentType}${props.currentSubType && ' subtypes:' + props.currentSubType}&page=${props.currentPage}&pageSize=6`)
            .then(res => {
                props.setNewPokemonData(res.data.data)
                props.setTotalItemsCount(res.data.totalCount)
                props.setPageSize(res.data.pageSize)
            }).catch(err => console.log(err))
    }, [props.currentType, props.currentSubType, props.currentPage])

    useEffect(() => {
        instance.get("types")
            .then(res => {
                setTypes(res.data.data)
            })
    }, [])

    useEffect(() => {
        instance.get("subtypes")
            .then(res => {
                setSubTypes(res.data.data)
            })
    }, [])

    return (
        <div className={style.select}>
            <SelectElement
                value={props.currentType}
                label={"Types"}
                types={types}
                callback={handleChangeType}
            />
            <div>
                <SelectElement
                    value={props.currentSubType}
                    label={"SubTypes"}
                    types={subTypes}
                    callback={handleChangeSubType}
                />
            </div>
        </div>
    );
}