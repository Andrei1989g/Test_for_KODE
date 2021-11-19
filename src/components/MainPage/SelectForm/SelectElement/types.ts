import {SelectChangeEvent} from "@mui/material/Select";

export type SelectPropsType = {
    value:string
    label:string
    callback:(event: SelectChangeEvent)=>void
    types:Array<string>
}