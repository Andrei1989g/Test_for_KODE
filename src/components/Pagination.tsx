import React, {Dispatch, SetStateAction} from "react";
import {Pagination} from "@mui/material";
import style from "../App.module.css"

type PaginationPagePropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    setCurrentPage:Dispatch<SetStateAction<number>>
}
export const PaginationPage = (props: PaginationPagePropsType) => {

    const handleChange = (event:React.ChangeEvent<unknown>, value:number) => {
        props.setCurrentPage(value);
        localStorage.setItem("currentPage", JSON.stringify(value))
    };

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    return <div className={style.pagination}>
        <Pagination color="primary" onChange={handleChange} page={props.currentPage} count={pagesCount} variant="outlined" shape="rounded"/>
    </div>
}