import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {OTPForm} from "../OTPForm";
import {MainPage, ResponseType} from "../MainPage";
import {AuthorizationForm} from "../AuthorizationForm";
import {PresentationalForm} from "../PresentationalForm";

export const Routes = () => {
    const [newPokemonData, setNewPokemonData] = React.useState<ResponseType[]>([]);
    const [currentType, setCurrentType] = React.useState('');
    const [currentSubType, setCurrentSubType] = React.useState('');
    const [totalItemsCount, setTotalItemsCount] = useState(0)
    const [pageSize, setPageSize] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        let currentType = localStorage.getItem("currentType")
        let currentSubType = localStorage.getItem("currentSubType")
        let currentPage = localStorage.getItem("currentPage")
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

//Сделать EnamNotations
    return <div>
        <Switch>
            <Route exact path="/"><AuthorizationForm/></Route>
            <Route exact path="/OTPForm"><OTPForm/></Route>
            <Route path={`/pokemon/:id`}><PresentationalForm/></Route>
            <Route exact path="/MainPage">
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
        </Switch>

    </div>
}