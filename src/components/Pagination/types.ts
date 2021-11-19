import {Dispatch, SetStateAction} from "react";

export type PaginationPagePropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
}