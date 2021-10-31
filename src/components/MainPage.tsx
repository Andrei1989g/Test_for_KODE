import React, {useState} from "react";
import style from "../App.module.css"
import {Header} from "./Header";
import {SelectForm} from "./Select";
import {ViewField} from "./ViewField";
import {Box, Button, Modal, Typography} from "@mui/material";
import axios from "axios";
import {Link, NavLink} from "react-router-dom";


export type ResponseType = {
    types: string[]
    subtypes: string
    id: string
    name: string
    artist: string
    images: {
        small: string
        large: string
    }
}
// const modalStyle = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     height: 300,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 17,
// };
// const instance = axios.create({
//     baseURL: 'https://api.pokemontcg.io/v2/',
//     headers: {
//         'X-Api-Key': '0ffac3b1-152b-46c3-9df9-b8e6a7685699'
//     }
// })


export const MainPage = () => {
    const [newPokemonData, setNewPokemonData] = React.useState<ResponseType[]>([]);

    // const [currentId, setCurrentId] = useState<string | null>("")
    // const handleClose = () => {
    //     setCurrentId(null)
    //     setOpen(false);
    // }
    // const [open, setOpen] = React.useState(false);
    //
    // const handleOpen = (id: string) => {
    //     instance.get(`cards/${newPokemonData}`)
    //         .then(res => {
    //             setCurrentId(res.data.data.id)
    //         })
    //     setOpen(true);
    // }


    return <div>
        <Header/>
        <span className={style.viewField}>
            <span>
                <SelectForm setNewPokemonData={setNewPokemonData}/>
                </span>
            <div className={style.viewer}>
                {newPokemonData?.map(el => {
                    //НЕОБХОДИМО ПЕРЕДАТЬ ДАННЫЕ из newPokemonData В КОМПОНЕНТУ ViewField
                    return <div /*onClick={() => handleOpen(el.id)}*/ className={style.viewItem} key={el.id}>
                        <NavLink to={{pathname: `/pokemon/${el.name}`, state:{id: el.id} }}>
                            <img src={el.images.small} className={style.img} alt="avatar"/>
                            <div>{el.name}</div>
                            <div>{el.artist}</div>
                        </NavLink>
                        {/*<Link to={`/pokemon/${el.name}`} state={{data:}}>{el.name}</Link>*/}
                    </div>
                })}
                </div>
<div>
            {/*{newPokemonData.map(el=>{*/}
    {/*    return (*/}
    {/*        <Modal*/}
    {/*            id={el.id}*/}
    {/*            open={open}*/}
    {/*            onClose={handleClose}*/}
    {/*            aria-labelledby="modal-modal-title"*/}
    {/*            aria-describedby="modal-modal-description"*/}
    {/*        >*/}
    {/*            <Box sx={modalStyle}>*/}
    {/*                <div className={style.viewMode}>*/}
    {/*                    <div className={style.largeImg}>*/}
    {/*                        blablabla*/}
    {/*                    </div>*/}
    {/*                    <div className={style.box}>*/}
    {/*                        <div className={style.personalData}>*/}
    {/*                            <div>Pokemon name:{el.name}</div>*/}
    {/*                            <div>Supertype:</div>*/}
    {/*                            <div>Types:{el.types}</div>*/}
    {/*                            <div>SubTypes:{el.subtypes}</div>*/}
    {/*                            <br/>*/}
    {/*                            <div>attackDamage:</div>*/}
    {/*                            <div>attackCost:</div>*/}
    {/*                            <div>weaknesses:</div>*/}
    {/*                            <div>hp:</div>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                    <div className={style.description}>*/}
    {/*                        textField description*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </Box>*/}
    {/*        </Modal>*/}
    {/*    )*/}
    {/*})}*/}
    {/*    <Modal*/}
    {/*        open={open}*/}
    {/*        onClose={handleClose}*/}
    {/*        aria-labelledby="modal-modal-title"*/}
    {/*        aria-describedby="modal-modal-description"*/}
    {/*    >*/}
    {/*        <Box sx={modalStyle}>*/}
    {/*            <div className={style.viewMode}>*/}
    {/*    <div className={style.largeImg}>*/}
    {/*        blablabla*/}
    {/*    </div>*/}
    {/*                <div className={style.box}>*/}
    {/*    <div className={style.personalData}>*/}
    {/*        <div>Pokemon name:</div>*/}
    {/*        <div>Supertype:</div>*/}
    {/*        <div>Types:</div>*/}
    {/*        <div>SubTypes:</div>*/}
    {/*        <br/>*/}
    {/*        <div>attackDamage:</div>*/}
    {/*        <div>attackCost:</div>*/}
    {/*        <div>weaknesses:</div>*/}
    {/*        <div>hp:</div>*/}
    {/*    </div>*/}
    {/*    </div>*/}
    {/*    <div className={style.description}>*/}
    {/*        textField description*/}
    {/*    </div>*/}
    {/*</div>*/}
    {/*        </Box>*/}
    {/*    </Modal>*/}
    </div>
        </span>
    </div>
}