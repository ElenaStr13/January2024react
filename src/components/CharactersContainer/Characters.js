import React, {useEffect, useState} from 'react';

import {characterService} from "../../services";
import {useNavigate, useParams} from "react-router-dom";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../store";

const Characters = () => {
    const {characters} = useSelector(state => state.characters)
    const {ids} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(charactersActions.getAll({ids}))
    }, [ids]);

    const homePage = () => {
        navigate((`/episodes`))
    }

    return (
        <div>
            <button onClick={homePage}>Episodes</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};