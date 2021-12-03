import * as React from 'react';
import {FC, memo, useCallback, useEffect} from 'react';
import {SelectChangeEvent} from '@mui/material/Select';
import style from "../../../App.module.css";
import {SelectElement} from './SelectElement/SelectElement';
import {instance} from "../../api/apiConfig";
import {SelectPropsType} from "./types";
import {apiPokemonData} from "../../api/apiConfig/api-pokemonData";
import {CURRENT_PAGE, CURRENT_SUB_TYPE, CURRENT_TYPE, EMPTY_ARRAY} from "../../../constants";

export const SelectForm: FC<SelectPropsType> = memo((
    {
        setCurrentType, setCurrentPage, setCurrentSubType,
        currentType, currentSubType, currentPage,
        setNewPokemonData, setTotalItemsCount, setPageSize
    }) => {
    const [types, setTypes] = React.useState<string[]>(EMPTY_ARRAY);
    const [subTypes, setSubTypes] = React.useState<string[]>(EMPTY_ARRAY);

    const handleChangeType = useCallback((event: SelectChangeEvent) => {
        setCurrentType(event.target.value);
        localStorage.setItem(CURRENT_TYPE, JSON.stringify(event.target.value))
        localStorage.setItem(CURRENT_PAGE, JSON.stringify(1))
        setCurrentPage(1)
    },[setCurrentType,setCurrentPage]);
    const handleChangeSubType = useCallback((event: SelectChangeEvent) => {
        setCurrentSubType(event.target.value);
        localStorage.setItem(CURRENT_SUB_TYPE, JSON.stringify(event.target.value))
        localStorage.setItem(CURRENT_PAGE, JSON.stringify(1))
        setCurrentPage(1)
    },[setCurrentSubType,setCurrentPage]);

    useEffect(() => {
        apiPokemonData.getPokemon({currentType, currentSubType, currentPage})
            .then(res => {
                setNewPokemonData(res.data.data)
                setTotalItemsCount(res.data.totalCount)
                setPageSize(res.data.pageSize)
            }).catch(err => console.error(err))
    }, [currentType, currentSubType, currentPage])

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
                value={currentType}
                label={"Types"}
                types={types}
                callback={handleChangeType}
            />
            <div>
                <SelectElement
                    value={currentSubType}
                    label={"SubTypes"}
                    types={subTypes}
                    callback={handleChangeSubType}
                />
            </div>
        </div>
    );
})
