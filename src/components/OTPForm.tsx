import React, {ChangeEvent, useState} from "react";
import {TextField} from "@material-ui/core";
import style from '../App.module.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Redirect} from "react-router-dom";

export const OTPForm = () => {
    const [code, setCode] = useState('')
    const [isClick, setIsClick] = useState(false)
    const [error, setError] = useState<string | null>("")
    console.log('OTPFORM')
    const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if (code === "12345") {
            setIsClick(true)
        } else {
            setError("Incorrect code")
        }
    }
    if (isClick) {
        return <Redirect to="/MainPage"/>
    }
    return <div className={style.firstPage}>
        <div className={style.input}>
            <TextField onChange={onChangeCode}
                       error={!!error}
                       id="outlined-error-helper-text"
                       helperText={error}
                       value={code}
                       label="Code from SMS"
                       variant="outlined"/>
        </div>
        <div>
            <Button onClick={onClickHandler} variant="contained" endIcon={<SendIcon/>}>
                Send
            </Button>
        </div>
    </div>
}