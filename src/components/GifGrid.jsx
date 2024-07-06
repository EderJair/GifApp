import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
import '../styles/gifGrid.css'



export const GifGrid = ({category, handleDelete}) => {

    const {images, isLoading} = useFetchGifs(category)

    console.log({ isLoading, images})

    const handD = () => {
        handleDelete(category)
    }
    
    return (
        <>
            <div className="div-button">
                <h3>{category.toUpperCase()}</h3> 
                <button onClick={handD}>Eliminar</button>
            </div>
            {
                isLoading && <p>Cargando...</p>
                // que significa isLoading? si es true, entonces muestra el mensaje de cargando
            }
            <div className="card-grid">
                {
                    // el map recorre el arreglo de imagenes y por cada imagen, se renderiza el componente GifItem
                   images.map(images => (
                        <GifItem key={images.id} 
                            {...images}
                        />
                   ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
