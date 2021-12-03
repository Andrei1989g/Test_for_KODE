import React, {FC, memo, useCallback} from "react";
import {Pagination} from "@mui/material";
import style from "../../App.module.css"
import {CURRENT_PAGE} from "../../constants";
import {PaginationPagePropsType} from "./types";


export const PaginationPage: FC<PaginationPagePropsType> = memo((
    {setCurrentPage, totalItemsCount, pageSize, currentPage}) => {

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
        localStorage.setItem(CURRENT_PAGE, JSON.stringify(value))
    },[setCurrentPage]);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    return <div className={style.pagination}>
        <Pagination
            color="primary"
            onChange={handleChange}
            page={currentPage}
            count={pagesCount}
            variant="outlined"
            shape="rounded"/>
    </div>
})
