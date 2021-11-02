import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {useHistory} from "react-router-dom";

type PropsType = {
    isBack?: boolean
}

export const Header: React.FC<PropsType> = ({isBack}) => {

    let history = useHistory()
    const back = () => history.push("/MainPage");
    const logout = () => history.push("/");


    return <AppBar position="static">
        <Toolbar>
            {isBack && <Button onClick={back} color="inherit">Back</Button>}
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}/>
            <Button onClick={logout} color="inherit">Logout</Button>
        </Toolbar>
    </AppBar>
}