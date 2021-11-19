import React, {FC, memo} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';
import {v1} from "uuid";
import {SelectPropsType} from "./types";

export const SelectElement: FC<SelectPropsType> = memo((
    {types, value, label, callback,}) => {
    return <FormControl sx={{m: 1, minWidth: 120}}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={value}
            label={label}
            onChange={callback}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {types.map(types => {
                return (
                    <MenuItem key={v1()} value={types}>{types}</MenuItem>
                )
            })}
        </Select>
    </FormControl>
})
