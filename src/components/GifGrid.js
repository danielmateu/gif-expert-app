// import React from "react";
// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
import './GifGrid.css'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(category);
   
    console.log(loading)

    // useEffect(() => {
    //     getGifs( category)
    //     .then(setImages);
    // }, [category]);

    return (
        <>
        <h3>{category}</h3>

        {loading && <p className="animate__animated animate__flash">'Cargando...'</p>  }
        <div className="card-grid" >
            
            {
                images.map( img=>(
                    <GifGridItem 
                    key = {img.id} 
                    { ...img} 
                    /> 
                ))
            }
        </div>
        </>
        
    );
};
