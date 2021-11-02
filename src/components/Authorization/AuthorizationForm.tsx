import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";
import style from '../../App.module.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Redirect} from "react-router-dom";

export const AuthorizationForm = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [isClick, setIsClick] = useState(false)
    const [error, setError] = useState<string | null>("")

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        setError(null)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        setError(null)
    }

    const onClickSend = () => {
        if (login === "kode@kode.ru" && password === "Enk0deng") {
            setIsClick(true)
        } else {
            setError("Invalid data")
        }
    }

    if (isClick) {
        return <Redirect to="/OTPForm"/>
    }

    return <div className={style.firstPage}>
        <div>
            <TextField value={login}
                       onChange={onChangeLogin}
                       error={!!error}
                       id="outlined-error-helper-text"
                       helperText={error}
                       label="Login"
                       variant="outlined"/>
        </div>
        <div className={style.input}>
            <TextField value={password}
                       onChange={onChangePassword}
                       error={!!error}
                       id="outlined-error-helper-text"
                       helperText={error}
                       label="Password"
                       variant="outlined"/>
        </div>
        <div>
            <Button onClick={onClickSend} variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
        </div>
    </div>
}