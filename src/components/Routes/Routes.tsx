import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import {OTPForm} from "../OTPForm";
import {MainPage, ResponseType} from "../MainPage";
import {AuthorizationForm} from "../AuthorizationForm";
import {PresentationalForm} from "../PresentationalForm";

export const Routes = () => {
    const [newPokemonData, setNewPokemonData] = React.useState<ResponseType[]>([]);
    const [currentType, setCurrentType] = React.useState('');
    const [currentSubType, setCurrentSubType] = React.useState('');
//Сделать EnamNotations
    return <div>
        <Switch>
            <Route exact path="/"><AuthorizationForm/></Route>
            <Route exact path="/OTPForm"><OTPForm/></Route>
            <Route exact path="/MainPage">
                <MainPage
                    currentType={currentType}
                    currentSubType={currentSubType}
                    setCurrentType={setCurrentType}
                    setCurrentSubType={setCurrentSubType}
                    setNewPokemonData={setNewPokemonData}
                    newPokemonData={newPokemonData}/>
            </Route>
            <Route path={`/pokemon/:id`}><PresentationalForm/></Route>
        </Switch>

    </div>
}