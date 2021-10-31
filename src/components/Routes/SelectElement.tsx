import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, {SelectChangeEvent} from '@mui/material/Select';


type SelectPropsType = {
    value:string
    label:string
    callback:(event: SelectChangeEvent)=>void
    types:Array<string>
}


export const SelectElement = (props:SelectPropsType) => {
    return  <FormControl sx={{m: 1, minWidth: 120}}>
        <InputLabel id="demo-simple-select-helper-label">Types</InputLabel>
        <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={props.value}
            label={props.label}
            onChange={props.callback}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {props.types.map(el => {
                return (
                    <MenuItem value={el}>{el}</MenuItem>
                )
            })}
        </Select>
    </FormControl>
}