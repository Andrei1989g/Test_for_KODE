import React, {FC, memo, useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {OTPForm} from "../Authorization/OTPForm";
import {MainPage} from "../MainPage/MainPage";
import {AuthorizationForm} from "../Authorization/AuthorizationForm";
import {PresentationalForm} from "../MainPage/PresentationForm/PresentationalForm";
import {ErrorPage} from "../ErrorPage/ErrorPage";
import {PATH} from "./index";
import {ResponseType} from '../MainPage/types'
import {CURRENT_PAGE, CURRENT_SUB_TYPE, CURRENT_TYPE, EMPTY_ARRAY, EMPTY_STRING, PAGE_SIZE} from "../../constants";

export const Routes:FC = memo(() => {
    const [newPokemonData, setNewPokemonData] = useState<ResponseType[]>(EMPTY_ARRAY);
    const [currentType, setCurrentType] = useState(EMPTY_STRING);
    const [currentSubType, setCurrentSubType] = useState(EMPTY_STRING);
    const [totalItemsCount, setTotalItemsCount] = useState(0)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        let currentType = localStorage.getItem(CURRENT_TYPE)
        let currentSubType = localStorage.getItem(CURRENT_SUB_TYPE)
        let currentPage = localStorage.getItem(CURRENT_PAGE)
        if (currentType) {
            let valueType = JSON.parse(currentType)
            setCurrentType(valueType)
        }
        if (currentSubType) {
            let subValueType = JSON.parse(currentSubType)
            setCurrentSubType(subValueType)
        }
        if (currentPage) {
            let currentPageValue = JSON.parse(currentPage)
            setCurrentPage(currentPageValue)
        }
    }, [])

    return <div>
        <Switch>
            <Route exact path={PATH.AUTHORIZATION_FORM}><AuthorizationForm/></Route>
            <Route exact path={PATH.OTP_FORM}><OTPForm/></Route>
            <Route exact path={PATH.PRESENTATIONAL_FORM}><PresentationalForm/></Route>
            <Route exact path={PATH.MAIN_PAGE}>
                <MainPage
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    totalItemsCount={totalItemsCount}
                    setTotalItemsCount={setTotalItemsCount}
                    currentType={currentType}
                    currentSubType={currentSubType}
                    setCurrentType={setCurrentType}
                    setCurrentSubType={setCurrentSubType}
                    setNewPokemonData={setNewPokemonData}
                    newPokemonData={newPokemonData}/>
            </Route>
            <Route path={"*"}><ErrorPage/></Route>
        </Switch>
    </div>
})
