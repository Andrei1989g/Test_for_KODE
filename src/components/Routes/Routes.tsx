import React from "react";
import {Route, Switch} from "react-router-dom";
import {OTPForm} from "../OTPForm";
import {MainPage} from "../MainPage";
import {AuthorizationForm} from "../AuthorizationForm";
import {ViewField} from "../ViewField";

export const Routes = () => {
    return <div>
        <Switch>
            <Route exact path="/"><AuthorizationForm/></Route>
            <Route exact path="/OTPForm"><OTPForm/></Route>
            <Route exact path="/MainPage"><MainPage/></Route>
            {/*<Route exact path="/ViewField"><ViewField/></Route>*/}
            <Route path={`/pokemon/:id`}><ViewField/></Route>

        </Switch>

    </div>
}