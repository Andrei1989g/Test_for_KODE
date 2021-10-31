import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";

export const Header = () => {
    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}/>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
}