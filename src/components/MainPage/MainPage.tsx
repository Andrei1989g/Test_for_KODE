import React, {FC, memo} from "react";
import style from "./MainPage.module.css"
import {Header} from "../Header/Header";
import {SelectForm} from "./SelectForm/SelectForm";
import {NavLink} from "react-router-dom";
import {PaginationPage} from "../Pagination/Pagination";
import {MainPagePropsType} from "./types";

export const MainPage: FC<MainPagePropsType> = memo(
    ({
         currentPage, setCurrentPage,
         setPageSize, setTotalItemsCount,
         currentSubType, currentType, setCurrentSubType,
         setCurrentType, newPokemonData, setNewPokemonData,
         pageSize, totalItemsCount
     }) => {

        return <div>
            <Header/>
            <span className={style.mainPage}>
            <span>
                <SelectForm
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setPageSize={setPageSize}
                    setTotalItemsCount={setTotalItemsCount}
                    currentSubType={currentSubType}
                    currentType={currentType}
                    setCurrentSubType={setCurrentSubType}
                    setCurrentType={setCurrentType}
                    newPokemonData={newPokemonData}
                    setNewPokemonData={setNewPokemonData}/>
                </span>
            <div className={style.viewer}>
                {newPokemonData.map(pokemonData => {
                    return <div className={style.viewItem} key={pokemonData.id}>
                        <NavLink className={style.navLink} to={{pathname: `/pokemon/${pokemonData.id}`}}>
                            <img src={pokemonData.images.small} className={style.img} alt="avatar"/>
                            <div>{pokemonData.name}</div>
                            <div>{pokemonData.artist}</div>
                        </NavLink>
                    </div>
                })}
                </div>
        </span>
            <PaginationPage currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageSize={pageSize}
                            totalItemsCount={totalItemsCount}/>
        </div>
    })
