import React, {FC, memo} from "react";
import errorImg from "../../assets/404-error-with-character-error-design-template-website_114341-24.jpg"
import style from "../../App.module.css"
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

export const ErrorPage: FC = memo(() => {
    let history = useHistory()
    const logout = () => history.push("/");

    return <div className={style.errorImg}>
        <img src={errorImg} alt="Page not found"/>
        <Button onClick={logout}>back</Button>
    </div>
})