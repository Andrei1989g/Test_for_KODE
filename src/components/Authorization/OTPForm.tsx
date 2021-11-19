import React, {ChangeEvent, FC, memo, useState} from "react";
import {TextField} from "@material-ui/core";
import style from './Authorization.module.css'
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {Redirect} from "react-router-dom";
import {EMPTY_STRING, OTP_CODE} from "../../constants";

export const OTPForm: FC = memo(() => {
    const [code, setCode] = useState(EMPTY_STRING)
    const [isClick, setIsClick] = useState(false)
    const [error, setError] = useState<string | null>(EMPTY_STRING)

    const onChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.currentTarget.value)
        setError(null)
    }
    const onClickHandler = () => {
        if (code === OTP_CODE) {
            setIsClick(true)
        } else {
            setError("Incorrect code")
        }
    }
    if (isClick) {
        return <Redirect to="/MainPage"/>
    }

    console.log("Password: 12345")
    return <div className={style.firstPage}>
        <div className={style.input}>
            <TextField
                onChange={onChangeCode}
                error={!!error}
                id="outlined-error-helper-text"
                helperText={error}
                value={code}
                label="Code from SMS"
                variant="outlined"/>
        </div>
        <div>
            <Button
                onClick={onClickHandler}
                variant="contained"
                endIcon={<SendIcon/>}>
                Send
            </Button>
        </div>
    </div>
})
