import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import {OTPForm} from "../Authorization/OTPForm";
import {MainPage, ResponseType} from "../MainPage/MainPage";
import {AuthorizationForm} from "../Authorization/AuthorizationForm";
import {PresentationalForm} from "../MainPage/PresentationForm/PresentationalForm";
import {ErrorPage} from "../ErrorPage";

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
            <Route path="*"><ErrorPage/></Route>
        </Switch>

    </div>
}